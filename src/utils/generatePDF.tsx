/* eslint-disable @typescript-eslint/no-explicit-any */
import { jsPDF } from "jspdf";

const IMAGE_WIDTH = 80;
const IMAGE_HEIGHT = 50;

// Utility to add a section header with underline
const addSectionHeader = (doc: jsPDF, title: string, y: number): number => {
  doc.setFont("helvetica", "bold").setFontSize(14).setTextColor(0, 51, 102);
  doc.text(title, 10, y);
  doc.setLineWidth(0.5).line(10, y + 2, 200, y + 2);
  return y + 10;
};

// Utility to add a field with label and value
const addField = (
  doc: jsPDF,
  label: string,
  value: string,
  y: number,
  x = 10,
  width = 50,
  maxWidth = 130
): number => {
  doc.setFont("helvetica", "normal").setFontSize(10).setTextColor(0);
  doc.text(`${label}:`, x, y);

  doc.setFont("helvetica", "bold");
  const wrappedText = doc.splitTextToSize(value || "N/A", maxWidth);
  doc.text(wrappedText, x + width, y);

  // Calculate the new Y position based on the number of lines in wrapped text
  const lineHeight = 5; // Approximate line height for 10px font
  y += lineHeight * wrappedText.length;

  return y + 5;
};

// Utility to add two fields side-by-side
const addFieldPair = (
  doc: jsPDF,
  label1: string,
  value1: string,
  label2: string,
  value2: string,
  y: number
): number => {
  y = addField(doc, label1, value1, y);
  return addField(doc, label2, value2, y - 10, 110);
};

// Utility to add images side-by-side with placeholders
const addPairImage = (
  doc: jsPDF,
  title1: string,
  image1: string | null,
  title2: string,
  image2: string | null,
  y: number,
  width = IMAGE_WIDTH,
  height = IMAGE_HEIGHT
): number => {
  doc.setFont("helvetica", "bold").setFontSize(12).text(title1, 10, y);
  doc.text(title2, 110, y);
  y += 5;

  const addImage = (x: number, img: string | null) => {
    if (img) {
      doc.addImage(img, "PNG", x, y, width, height);
    } else {
      doc.setFont("helvetica", "normal").setFontSize(10);
      doc.text("No image provided", x + 20, y + height / 2);
      doc.rect(x, y, width, height);
    }
  };

  addImage(10, image1);
  addImage(110, image2);
  return y + height + 10;
};

// Calculate driver's age
const getDriverAge = (currentDate: Date, driverDOB: string): string => {
  const dob = new Date(driverDOB);
  const age = currentDate.getFullYear() - dob.getFullYear();
  return age.toString();
};

// Main function to generate the PDF
export const generatePDF = (formData: any) => {
  const doc = new jsPDF();
  let y = 20;

  const date = formData.accidentDate;
  const formattedDate = new Intl.DateTimeFormat("en-UK").format(date);
  const driverAge = getDriverAge(date, formData.driverDOB);

  // Title and Logo
  doc.setFont("helvetica", "bold").setFontSize(24).setTextColor(0, 0, 0);
  doc.text("Motor Fleet Accident Report", 10, y);
  doc.rect(160, y - 10, 30, 20); // Placeholder for Logo
  doc.setFontSize(10).text("Company Logo", 165, y + 3);
  y += 20;

  // Incident Details
  y = addSectionHeader(doc, "Incident Details", y);
  y = addFieldPair(
    doc,
    "Date of Accident",
    formattedDate,
    "Time of Accident",
    formData.accidentTime,
    y
  );
  y = addField(doc, "Accident Location", formData.accidentLocation, y);
  y = addFieldPair(
    doc,
    "Weather Conditions",
    formData.weatherCondition,
    "Road Conditions",
    formData.roadCondition,
    y
  );
  y = addFieldPair(
    doc,
    "Driver's Vehicle Speed (mph)",
    formData.driverSpeed,
    "TP Vehicle Speed (mph)",
    formData.tpSpeed,
    y
  );

  // Driver Information
  y = addSectionHeader(doc, "Driver Information", y);
  y = addField(doc, "Driver Full Name", formData.driverName, y);
  y = addFieldPair(
    doc,
    "Date of Birth",
    formData.driverDOB,
    "Driver Age",
    driverAge,
    y
  );
  y = addFieldPair(
    doc,
    "Full Driving License Held From",
    formData.driverFullLicenseDate,
    "Contact Number",
    formData.driverPhoneN,
    y
  );
  y = addField(doc, "Driver Address", formData.driverAddress, y);

  // Vehicle Information
  y = addSectionHeader(doc, "Vehicle Information", y);
  y = addFieldPair(
    doc,
    "Vehicle Reg Number",
    formData.vehRegN,
    "Make & Model",
    `${formData.vehMake} ${formData.vehModel}`,
    y
  );
  y = addFieldPair(
    doc,
    "Vehicle is",
    formData.isVehHired,
    "Hired Company",
    formData.vehHiredCompany,
    y
  );

  // Third-Party Information
  y = addSectionHeader(doc, "Third-Party Details", y);
  y = addFieldPair(
    doc,
    `TP ${formData.isVehInvolved === "yes" ? "Driver" : ""} Full Name`,
    formData.tpDriverName,
    "TP Contact Number",
    formData.tpDriverTelephone,
    y
  );
  y = addField(
    doc,
    `TP ${formData.isVehInvolved === "yes" ? "Driver" : ""} Address`,
    formData.tpDriverAddress,
    y
  );

  if (formData.isVehInvolved === "yes") {
    y = addFieldPair(
      doc,
      "TP Vehicle Reg Number",
      formData.tpRegNumber,
      "TP Vehicle Make & Model",
      `${formData.tpMake} ${formData.tpModel}`,
      y
    );
    y = addFieldPair(
      doc,
      "TP Insurance Company",
      formData.tpInsuranceCompany,
      "TP Policy No",
      formData.tpPolicyNo,
      y
    );
  }

  if (formData.isTpDriverOwner === "no") {
    y = addFieldPair(
      doc,
      "Vehicle Owner Name",
      formData.tpOwnerName,
      "Vehicle Owner Contact",
      formData.tpOwnerTelephone,
      y
    );
    y = addField(doc, "Owner Address", formData.tpOwnerAddress, y);
  }

  // Damage Descriptions with Background Image
  doc.addPage();
  y = addSectionHeader(doc, "Damage Descriptions", 20);

  // Adding placeholder images
  doc.addImage("/damageVeh.png", "PNG", 10, y + 5, IMAGE_WIDTH, IMAGE_HEIGHT);
  doc.addImage("/damageVeh.png", "PNG", 110, y + 5, IMAGE_WIDTH, IMAGE_HEIGHT);

  y = addPairImage(
    doc,
    "Driver Vehicle Damage",
    formData.driverDamageVehUrl,
    "Third-Party Vehicle Damage",
    formData.tpDamageVehUrl,
    y
  );

  y = addFieldPair(
    doc,
    "Driver Vehicle Damage Details",
    formData.driverDamageDetails,
    "Third-Party Vehicle Damage Details",
    formData.tpDamageDetails,
    y
  );

  // Accident Schema

  y = addSectionHeader(doc, "Accident Diagrams", y);

  y = addPairImage(
    doc,
    "Before Impact",
    formData.schemeBeforeAccidentUrl,
    "After Impact",
    formData.schemeAfterAccidentUrl,
    y
  );

  // Driver's Statement and Signature
  y = addSectionHeader(doc, "Driver's Statement", y);
  y = addField(doc, "Statement", formData.driverStatement, y + 5, 10, 50, 130);

  // Injury information
  if (
    formData.isInjury === "yes" ||
    formData.isWitness === "yes" ||
    formData.isPolice === "yes"
  ) {
    doc.addPage();
    y = 20;
  }

  if (formData.isInjury === "yes") {
    y = addSectionHeader(doc, "Injury Details", y);
    y = addField(doc, "Injury Details", formData.injuryDetails, y);
  }

  if (formData.isWitness === "yes") {
    y = addSectionHeader(doc, "Witness Details", y);
    y = addField(doc, "Witness Name", formData.witnessName, y);
    y = addField(doc, "Witness Address", formData.witnessAddress, y);
  }
  if (formData.isPolice === "yes") {
    y = addSectionHeader(doc, "Police Attendence", y);
    y = addField(doc, "Officer Name", formData.policeName, y);
    y = addField(
      doc,
      "Station of attending Officer",
      formData.policeStattion,
      y
    );
    y = addField(doc, "Police Reference No", formData.policeRefN, y);
  }
  y = addSectionHeader(doc, "Driver's Signature", y + 20);
  if (formData.driverSignature) {
    doc.addImage(formData.driverSignature, "PNG", 10, y, 100, 40);
  } else {
    doc.text("No signature provided", 10, y);
  }
  y = addField(
    doc,
    "Date",
    new Intl.DateTimeFormat("en-UK").format(date).toString(),
    y + 50
  );

  // Save the PDF
  doc.save("Accident_Report_Form.pdf");
};

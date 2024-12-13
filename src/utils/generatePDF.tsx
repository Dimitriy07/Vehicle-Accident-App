/* eslint-disable @typescript-eslint/no-explicit-any */
import { jsPDF } from "jspdf";

// Utility to add a section header with underline
function addSectionHeader(doc: jsPDF, title: string, y: number): number {
  doc.setFontSize(14);
  doc.setTextColor(0, 51, 102);
  doc.setFont("helvetica", "bold");
  doc.text(title, 10, y);
  doc.setLineWidth(0.5);
  doc.line(10, y + 2, 200, y + 2);
  return y + 10;
}

// Utility to add two fields side-by-side
function addFieldPair(
  doc: jsPDF,
  label1: string,
  value1: string,
  label2: string,
  value2: string,
  y: number
): number {
  doc.setFontSize(10);
  doc.setTextColor(0);
  const x1 = 10;
  const x2 = 110;

  doc.setFont("helvetica", "normal");
  doc.text(`${label1}:`, x1, y);
  doc.setFont("helvetica", "bold");
  doc.text(value1 || "N/A", x1 + 50, y);

  doc.setFont("helvetica", "normal");
  doc.text(`${label2}:`, x2, y);
  doc.setFont("helvetica", "bold");
  doc.text(value2 || "N/A", x2 + 50, y);

  return y + 10;
}

// Utility to add a single field
function addField(doc: jsPDF, label: string, value: string, y: number): number {
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text(`${label}:`, 10, y);
  doc.setFont("helvetica", "bold");
  doc.text(value || "N/A", 60, y);
  return y + 10;
}

// Utility to add an image
function addImageWithPlaceholder(
  doc: jsPDF,
  title: string,
  image: string | null,
  y: number,
  width = 180,
  height = 80
): number {
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text(title, 10, y);
  y += 5;

  if (image) {
    doc.addImage(image, "PNG", 10, y, width, height);
  } else {
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text("No image provided", 10, y + height / 2);
    doc.rect(10, y, width, height);
  }
  return y + height + 10;
}

// Main function to generate the PDF
export function generatePDF(formData: any) {
  const doc = new jsPDF();
  let yPos = 20;

  // Title and Logo
  doc.setFontSize(24);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(0, 0, 0);
  doc.text("Motor Fleet Accident Report", 10, yPos);

  // Placeholder for Logo (positioned to the right)
  doc.rect(160, yPos - 10, 30, 20); // Box for the logo
  doc.setFontSize(10);
  doc.text("Company Logo", 165, yPos + 3);
  yPos += 20;

  // Incident Details Section
  yPos = addSectionHeader(doc, "Incident Details", yPos);
  yPos = addFieldPair(
    doc,
    "Date of Accident",
    formData.date || "N/A",
    "Time of Accident",
    formData.time || "N/A",
    yPos
  );
  yPos = addField(doc, "Accident Location", formData.location || "N/A", yPos);
  yPos = addFieldPair(
    doc,
    "Weather Conditions",
    formData.weather || "N/A",
    "Road Conditions",
    formData.road || "N/A",
    yPos
  );

  // Driver Information Section
  yPos = addSectionHeader(doc, "Driver Information", yPos);
  yPos = addFieldPair(
    doc,
    "Driver Full Name",
    formData.driverName || "N/A",
    "Date of Birth",
    formData.driverDOB || "N/A",
    yPos
  );
  yPos = addFieldPair(
    doc,
    "Driver Age",
    formData.driverAge || "N/A",
    "Full Driving License Held",
    formData.licenseDate || "N/A",
    yPos
  );
  yPos = addField(doc, "Contact Number", formData.driverPhone || "N/A", yPos);

  // Vehicle Information Section
  yPos = addSectionHeader(doc, "Vehicle Information", yPos);
  yPos = addFieldPair(
    doc,
    "Vehicle Registration Number",
    formData.vehicleReg || "N/A",
    "Make & Model",
    formData.vehicleMake || "N/A",
    yPos
  );

  // Check if there's room left on the page; if not, add a new page
  if (yPos > 240) {
    doc.addPage();
    yPos = 20;
  }

  // Third-Party Information Section
  yPos = addSectionHeader(doc, "Third-Party Vehicle Details", yPos);
  yPos = addFieldPair(
    doc,
    "TP Driver Full Name",
    formData.tpDriverName || "N/A",
    "TP Contact Number",
    formData.tpDriverPhone || "N/A",
    yPos
  );
  yPos = addFieldPair(
    doc,
    "TP Vehicle Registration Number",
    formData.tpVehicleReg || "N/A",
    "TP Vehicle Make & Model",
    formData.tpVehicleMake || "N/A",
    yPos
  );

  // Damage Descriptions with Background Image Placeholders
  doc.addPage();
  if (yPos > 200) {
    doc.addPage();
    yPos = 20;
  }
  yPos = addSectionHeader(doc, "Damage Descriptions", yPos);
  yPos = addImageWithPlaceholder(
    doc,
    "Driver Vehicle Damage",
    formData.driverDamageCanvas || null,
    yPos
  );
  yPos = addImageWithPlaceholder(
    doc,
    "Third-Party Vehicle Damage",
    formData.tpDamageCanvas || null,
    yPos
  );

  // Driver's Statement and Signature Section
  if (yPos > 180) {
    doc.addPage();
    yPos = 20;
  }
  yPos = addSectionHeader(doc, "Driver's Statement", yPos);
  yPos = addField(
    doc,
    "Statement",
    formData.driverStatement || "N/A",
    yPos + 5
  );

  yPos = addSectionHeader(doc, "Driver's Signature", yPos + 20);
  if (formData.driverSignature) {
    doc.addImage(formData.driverSignature, "PNG", 10, yPos, 100, 40);
  } else {
    doc.text("No signature provided", 10, yPos);
  }

  // Save the PDF
  doc.save("Accident_Report_Form.pdf");
}

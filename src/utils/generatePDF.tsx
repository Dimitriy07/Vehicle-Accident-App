/* eslint-disable @typescript-eslint/no-explicit-any */
import jsPDF from "jspdf";
import "jspdf-autotable";

export function generatePDF(formData: {
  fullName: any;
  dateOfBirth: any;
  age: any;
  accidentDate: any;
  accidentTime: any;
  accidentLocation: any;
  weatherCondition: any;
  roadCondition: any;
  driverDamageDetails: any;
  tpDamageDetails: any;
  driverStatement: any;
  driverSignature: string;
  schemeBeforeAccident: string;
  schemeAfterAccident: string;
}) {
  const doc = new jsPDF();

  // Add header
  doc.setFontSize(16);
  doc.text("Monolith UK LTD Motor Fleet Accident Form", 10, 20);

  // Section: Driver Details
  doc.setFontSize(12);
  doc.text("Driver Details", 10, 40);

  doc.setFontSize(10);
  doc.text(`Full Name: ${formData.fullName || "N/A"}`, 10, 50);
  doc.text(`Date of Birth: ${formData.dateOfBirth || "N/A"}`, 10, 60);
  doc.text(`Age: ${formData.age || "N/A"}`, 10, 70);

  // Section: Accident Details
  doc.text("Accident Details", 10, 90);
  doc.text(`Date: ${formData.accidentDate || "N/A"}`, 10, 100);
  doc.text(`Time: ${formData.accidentTime || "N/A"}`, 10, 110);
  doc.text(`Location: ${formData.accidentLocation || "N/A"}`, 10, 120);
  doc.text(`Weather Condition: ${formData.weatherCondition || "N/A"}`, 10, 130);
  doc.text(`Road Condition: ${formData.roadCondition || "N/A"}`, 10, 140);

  // Section: Damage Details
  doc.text("Damage Details", 10, 160);
  doc.text(`Your Vehicle Damage:`, 10, 170);
  doc.text(formData.driverDamageDetails || "N/A", 10, 180, { maxWidth: 180 });
  doc.text(`Third Party Vehicle Damage:`, 10, 200);
  doc.text(formData.tpDamageDetails || "N/A", 10, 210, { maxWidth: 180 });

  // Section: Driver's Statement
  doc.text("Driver's Statement", 10, 230);
  doc.text(formData.driverStatement || "N/A", 10, 240, { maxWidth: 180 });

  // Section: Signature
  if (formData.driverSignature) {
    doc.text("Signature:", 10, 260);
    const img = new Image();
    img.src = formData.driverSignature; // base64 encoded image
    doc.addImage(img, "PNG", 50, 260, 100, 40);
  }

  // Section: Sketches
  if (formData.schemeBeforeAccident) {
    doc.addPage();
    doc.text("Scheme Before Accident", 10, 20);
    const img = new Image();
    img.src = formData.schemeBeforeAccident; // base64 encoded image
    doc.addImage(img, "PNG", 10, 30, 180, 120);
  }

  if (formData.schemeAfterAccident) {
    doc.addPage();
    doc.text("Scheme After Accident", 10, 20);
    const img = new Image();
    img.src = formData.schemeAfterAccident; // base64 encoded image
    doc.addImage(img, "PNG", 10, 30, 180, 120);
  }

  // Save the PDF
  doc.save("Accident_Form.pdf");
}

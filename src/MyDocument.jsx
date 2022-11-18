// import logo from "../assets/img/logo.png";
import jsPDF from "jspdf";
// import { renderToString } from "react-dom/server";

const MyDocument = () => {
  const doc = new jsPDF();

  doc.setFontSize(13);
  doc.setFont("about", "bold");
  doc.text("Proficiency Learning Solutions Pvt Ltd ", 75, 20);
  doc.text("Main Mathura Road A-12 2nd Floor,Mohan Cooperative", 75, 28);
  doc.text("Industrial Estate New Delhi DL 110044 India", 75, 33);
  doc.setFont("invoice", "bold");
  doc.setFontSize(15);

  doc.setLineWidth(0.5);
  doc.text("CREDIT NOTE", 95, 56);
  doc.line(20, 50, 203, 50);
  doc.setLineWidth(0.1);
  doc.line(20, 60, 203, 60);
  doc.setLineWidth(0.3);
  doc.line(20, 180, 20, 50);
  doc.line(20, 120, 203, 120);
  doc.line(90, 180, 90, 60);
  doc.line(150, 165, 150, 60);
  doc.line(90, 75, 203, 75);
  doc.line(90, 90, 203, 90);
  doc.line(90, 105, 203, 105);
  doc.line(90, 135, 203, 135);
  doc.line(90, 150, 203, 150);
  doc.line(90, 165, 203, 165);
  doc.line(90, 180, 203, 180);
  doc.setLineWidth(0.1);
  doc.line(20, 180, 203, 180);
  // h
  doc.setFont("line","bold")
  doc.line(203, 180, 203, 50);

  doc.setFont("bill", "bold");
  doc.setFontSize(9);
  doc.text("Bill To :", 23, 65);
  doc.setFontSize(10);
  doc.text("MKK Enterprises :", 23, 72);
  doc.setFont("about", "normal");
  doc.setFontSize(8);
  doc.text("F-2/13 Ratiya Marg Sangam Vihar,MKK Enterprises, ", 23, 76);
  doc.text("New Delhi - 110080", 23, 84);
  doc.text("Delhi - INDIA", 23, 88);
  doc.setFont("about", "bold");
  doc.setFontSize(10);
  doc.text("GSTIN Number :", 23, 108);

  //
  doc.setFont("sales", "bold");
  doc.setFontSize(10);
  doc.text("Sales Credit Invoice No. ", 95, 65);
  doc.text(" Dated ", 165, 65);
  doc.setFont("sales", "normal");
  doc.text("14/12/2021 ", 165, 70);
  doc.setFont("sales", "bold");
  doc.text("Mode/Terms of Payment", 158, 80);
  doc.text(" Reference Date", 160, 95);
  doc.setFont("sales", "normal");
  doc.text("25-Feb-2021", 160, 102);
  doc.setFont("sales", "bold");
  doc.text("Dated", 160, 110);
  doc.text("Motor Vehicle No.", 160, 125);
  doc.text("Number of Boxes", 160, 140);
  doc.setFont("sales", "normal");
  doc.text("loose", 160, 145);
  doc.setFont("sales", "bold");
  doc.text("GR Date", 160, 155);
  doc.setFont("sales", "normal");
  doc.text("09/12/2021", 160, 162);
  doc.text("CN / CN/31581/21-22 ", 95, 71);
  //
  doc.setFont("challan", "bold");
  doc.setFontSize(10);
  doc.text("Challan No. ", 95, 80);
  //
  doc.setFont("challan", "normal");
  doc.setFontSize(10);
  //
  doc.setFont("order", "bold");
  doc.setFontSize(10);
  doc.text("Reference No.", 95, 95);
  doc.setFont("order", "normal");
  doc.text("RI/52941/20-21 ", 95, 101);

  //
  doc.setFont("order", "bold");
  doc.setFontSize(10);
  doc.text("Order No.", 95, 110);
  //
  doc.setFontSize(10);
  doc.text("Dispatch Doc No.", 95, 125);
  //
  doc.setFontSize(10);
  doc.text("Transporter Name", 95, 140);
  //
  doc.setFont("order", "normal");
  doc.text("By Hand Sumit Goyal", 95, 146);

  doc.setFont("order", "bold");
  doc.text("Bill of Ladding/LR-RR No.", 95, 155);
  //
  doc.setFont("order", "normal");
  doc.text("By Hand Sumit Goyal", 95, 162);
  //
  doc.setFont("order", "bold");
  doc.text("Terms of Delivery", 95, 172);

  // ship to

  doc.setFont("bill", "bold");
  doc.setFontSize(9);
  doc.text("Ship To :", 23, 125);
  doc.setFontSize(10);
  doc.text("MKK Enterprises :", 23, 130);
  doc.setFont("about", "normal");
  doc.setFontSize(8);
  doc.text("F-2/13 Ratiya Marg Sangam Vihar New Delhi, ", 23, 135);
  doc.text("MKK Enterprises, ", 23, 138);
  doc.text("Delhi - 110080", 23, 150);
  doc.text("Delhi - INDIA", 23, 154);

  doc.setFont("bill", "bold");
  doc.text("State Code : 07 ", 23, 162);
  doc.text("State Name : DELHI ", 23, 168);
  doc.text("Mobile : 9582400777  ", 23, 174);

  //

  doc.addPage("a4", "portrait");

  doc.setLineWidth(0.5);
  doc.line(10, 20, 205, 20);
  doc.line(10, 35, 205, 35);
  doc.line(10, 95, 10, 20);
  doc.line(10, 90, 205, 90);
  doc.line(10, 95, 205, 95);
  // horizontal
  doc.line(2, 20, 205, 20);
  doc.line(2, 35, 10, 35);
  doc.line(2, 90, 10, 90);
  doc.line(2, 95, 10, 95);
  // horizontal line
  // straight line
  doc.line(2, 95, 2, 20);
  // straight line
  // straight line
  doc.line(100, 95, 100, 20);
  // straight line

  doc.line(20, 20, 205, 20);
  doc.line(20, 35, 205, 35);
  doc.line(130, 27, 205, 27);
  doc.line(23, 95, 23, 20);
  doc.line(205, 95, 205, 20);
  doc.line(50, 95, 50, 20);
  doc.line(63, 95, 63, 20);
  doc.line(141, 95, 141, 27);
  doc.line(166, 95, 166, 27);
  doc.line(191, 95, 191, 27);
  doc.line(82, 95, 82, 20);
  doc.line(90, 95, 90, 20);
  doc.line(130, 95, 130, 20);

  // doc.line(120, 95, 120, 20);
  doc.line(155, 95, 155, 20);
  doc.line(180, 95, 180, 20);
  doc.line(20, 90, 205, 90);
  doc.line(20, 95, 205, 95);
  doc.setFontSize(7);
  doc.text("S.No.", 3, 28);
  doc.text("Description of Goods/", 25, 28);
  doc.text("HSN-SAC ", 11, 28);
  doc.text("Code", 11, 32);
  doc.text("Quantity", 52, 28);
  doc.text("Rate", 68, 28);
  doc.text("Per", 84, 28);
  doc.text("Disc %", 91, 28);
  doc.text("Amount", 108, 28);
  doc.text("CGST[INR]", 135, 25);
  doc.text("Rate", 134, 31);
  doc.text("Amount", 142, 31);
  doc.text("SGST[INR]", 160, 25);
  doc.text("Rate", 159, 31);
  doc.text("Amount", 167, 31);
  doc.text("IGST[INR]", 185, 25);
  doc.text("Rate", 184, 31);
  doc.text("Amount", 192, 31);
  //   date

  //   total
  doc.setFont("Total", "bold");
  doc.text("Total: ", 26, 93);
  // doc.text("8.00", 58, 93);
  // doc.text("400.00", 117, 93);
  doc.text("0.00", 146, 93);
  doc.text("0.00", 171, 93);
  doc.text("0.00", 196, 93);

  // amount chargeable
  doc.setLineWidth(0.1);
  doc.line(2, 110, 205, 110);
  //
  doc.line(2, 50, 2, 110);
  doc.line(205, 50, 205, 110);
  doc.setLineWidth(0.5);
  doc.line(103, 95, 103, 110);
  //
  doc.setLineWidth(0.5);
  doc.line(2, 120, 205, 120);
  doc.line(2, 270, 2, 20);
  // s
  doc.line(205, 270, 205, 20);
  // h
  doc.line(2, 270, 205, 270);
  // h
  doc.line(2, 135, 205, 135);
  doc.line(2, 145, 205, 145);
  // s
  doc.line(103, 270, 103, 135);
  // h
  doc.setLineWidth(0.1);
  doc.line(2, 205, 205, 205);

  // text
  // first goods
  doc.setFont("Total", "normal");
  doc.text("1", 4, 40);
  doc.text("49.01.99", 12, 40);
  doc.setFontSize(6);
  doc.text("WOWMATCBSE06SP20", 25, 40);
  doc.text("/WOW! Mathematics -", 25, 42);
  doc.text("CBSE Book 6", 25, 44);
  doc.setFontSize(7);
  doc.text("56.00", 53, 40);
  doc.text("490.00", 68, 40);
  doc.text("NOS", 83, 40);
  doc.text("20.00", 92, 40);
  doc.text("27,440.00", 110, 40);
  doc.text("0.00", 133, 40);
  doc.text("0.00", 146, 40);
  doc.text("0.00", 158, 40);
  doc.text("0.00", 170, 40);
  doc.text("0.00", 185, 40);
  doc.text("0.00", 195, 40);
  // 2nd goods
  doc.setFont("Total", "normal");
  doc.text("2", 4, 51);
  doc.text("49.01.99", 12, 51);
  doc.setFontSize(6);
  doc.text("WOWMATCBSE07SP20", 25, 51);
  doc.text("/WOW! Mathematics -", 25, 53);
  doc.text("CBSE Book 7", 25, 55);
  doc.setFontSize(7);
  doc.text("60.00", 53, 51);
  doc.text("490.00", 68, 51);
  doc.text("NOS", 83, 51);
  doc.text("20.00", 92, 51);
  doc.text("29,400.00", 110, 51);
  doc.text("0.00", 133, 51);
  doc.text("0.00", 146, 51);
  doc.text("0.00", 158, 51);
  doc.text("0.00", 170, 51);
  doc.text("0.00", 185, 51);
  doc.text("0.00", 195, 51);
  // 3rd goods
  doc.setFont("Total", "normal");
  doc.text("3", 4, 59);
  doc.text("49.01.99", 12, 59);
  doc.setFontSize(6);
  doc.text("WOWMATCBSE08SP20", 25, 59);
  doc.text("/WOW! Mathematics -", 25, 61);
  doc.text("CBSE Book 7", 25, 63);
  doc.setFontSize(7);
  doc.text("27.00", 53, 59);
  doc.text("490.00", 68, 59);
  doc.text("NOS", 83, 59);
  doc.text("20.00", 92, 59);
  doc.text("13,230.00", 110, 59);
  doc.text("0.00", 133, 59);
  doc.text("0.00", 146, 59);
  doc.text("0.00", 158, 59);
  doc.text("0.00", 170, 59);
  doc.text("0.00", 185, 59);
  doc.text("0.00", 195, 59);
  // Amount Chargeable (In Words) :
  doc.setFontSize(10);
  doc.setFont("amtc", "bold");
  doc.text("Amount Chargeable (In Words) :", 5, 100);
  doc.setFont("amtc", "normal");
  doc.text("Rupees Fifty-Six Thousand Fifty-Six Only", 5, 105);
  doc.setFont("amtc", "bold");
  doc.text("Untaxed Amount:", 140, 115);
  doc.text("Tax Amount (In Words) :", 5, 124);
  doc.text("Rupees Only", 5, 130);
  doc.text("Taxable:", 147, 124);
  doc.text("Total : 56,056.00", 147, 140);
  // compbnkdtls
  doc.text("Company's Bank Details" , 5,155 );
  doc.text("Bank Name" , 5,160 );
  doc.text("A/c No." , 5,165 );
  doc.text("IFSC Code" , 5,170 );
  
  doc.text("Company's PAN" , 110,155 );
  doc.text("CIN" , 110,160 );
  doc.text("GSTIN/UIN :" , 110,165 );
  doc.setFont("gstn","normal")
  doc.text("09AAJCP2139H1ZA" , 132,165 );
  
  // 
  doc.setFontSize(8);
  doc.setFont("gstn","bold")
  doc.text("Declaration: We declare that this invoice shows the actual price of" , 5,210 );
  doc.text("the goods described and that all particulars are true and correct." , 5,214 );
  doc.text("No E-Way Bill Required as notified under Annexure to Rule 138 (14) (a) of" , 5,218 );
  doc.text("CGST Rule 2017 for HSN Code 4901 for Printed Books. (Notification No." , 5,222 );
  doc.text("27/2017 Dt 30th August, 2017)." , 5,226 );
  
  doc.text("Declaration: We declare that this invoice shows the actual price of" , 5,210 );
  
  doc.setFontSize(9);
  
  doc.text("For Proficiency Learning Solutions Private Limited" , 125,210 );
  doc.text("Authorised Signatory", 168,250 );
  
  // 
  doc.text("Email ID: info@eupheus.in , Contact No: 01161400200 , Website: http://www.eupheus.in" , 60,275 );
  doc.text("SUBJECT TO DELHI JURISDICTION" , 80,280 );
  doc.text("This is a Computer Generated Invoice" , 81,285 );

  let width = doc.internal.pageSize.getWidth();
  let height = doc.internal.pageSize.getHeight();

  // doc.addImage(img, "PNG", 10, 0, 40, 12);
  const print = () => {
    window.open(doc.output("bloburl"), "_blank");
    // pdf.save("pdf");
  };

  return (
    <>
      <button onClick={print}>download</button>
    </>
  );
};

export default MyDocument;

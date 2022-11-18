import React from "react";
// import { Page, Text, Image, Document, StyleSheet } from "react-pdf";
// import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
  },
//   section: {
//     margin: 10,
//     padding: 10,
//     flexGrow: 1,
//   },
});

const Reactpdf = () => {
  return (
    <>
      <Document className="pl-[35%] h-[100vh]">
        <Page size="A4" style={styles.page} >
          <View  >
            <Text style={{textDecoration:"underline", padding:"auto"}}>CUSTOMER REGISTRATION FORM AND AGREEMENT</Text>
          <View className="flex" >
            <Text className=" pl-[25%] mt-4">No.: &nbsp; _________________</Text>
            <Text className=" pl-[20%] mt-4">Date: &nbsp; _________________</Text>
                <div className="w-[120px] ml-20 mt-2 h-[35px] border-[1px] border-black"><span className="text-[13px] text-center">2022-23 To 2024-25</span></div>
          </View>
          </View>
          {/* 1 */}
          <View>
            <div className="w-[770px] bg-slate-200 ml-[25%] h-[40vh] border-[1px] mt-2 border-[black] p-[15px]"> 
                <Text className="font-bold text-[12px] pl-2">Name of Party/ School*:</Text>
                <Text className="text-[13px] text-[red] underline">ABC BOOK SHOP PRIVATE LIMITED <span className="text-[black] absolute top-[94.5px]">__________________________________________________________________ </span></Text> <br />
                <Text className="text-[12px] text-[black] pl-2 ">Status*: Sole Proprietary/ Partnership/ LLP/Pvt. Ltd. / Public Ltd. /Trust: <span className="text-[red] underline">PVT LTD</span> <span className="text-[black] absolute top-[120px]">_______________________________________________________</span></Text> <br />
                <Text className="text-[13px] text-[black] pl-2 ">Address*: <span className="text-[red] underline">B-2345 AMAR COLONY LAJPAT NAGAR </span> <span className="text-[black] absolute top-[142px]">____________________________________________________________________________</span></Text><br />
                <Text className="text-[13px] text-[black] pl-2 ">City*: <span className="text-[red] underline">NEW DELHI </span>
                 
                <span className="text-[black] absolute top-[166.3px]">__________________</span><span className="ml-[120px] underline">State*:</span><span className="text-[red] underline">DELHI </span>
                <span className="text-[black] absolute top-[166.3px]">__________________</span><span className="ml-[120px] underline">Pin Code*:</span><span className="text-[red] underline">110016 </span> <span className="text-[black] absolute top-[166.3px]">__________________</span>
                </Text> <br />
                <Text className="text-[13px] text-[black] pl-2 ">Phone*: <span className="text-[red] underline">011- 12345678 </span><span className="text-[black] absolute top-[166.3px]">__________________</span>
                <span className="text-[black] absolute top-[181.3px]">__________________</span><span className="ml-[120px] underline">Mobile*:</span><span className="text-[red] underline">999999999 </span>
                <span className="text-[black] absolute top-[181.3px]">__________________</span><span className="ml-[120px] underline">E-Mail*:</span><span className="text-[red] underline">abcbook@gmail.com </span> <span className="text-[black] absolute top-[181.3px]">______</span>
                </Text> <br />
                <Text className="text-[13px] text-[black] pl-2 ">Firm/ Company/Trust Registration Number*: <span className="text-[red] underline">U33220DL2011PTC00234 </span><span className="text-[black] absolute top-[205.3px]">__________________</span>
                <span className="text-[black] absolute top-[205.3px]">__________________</span><span className="ml-[120px] underline"> Dated:</span><span className="text-[red] underline"> 13-10-2021 </span><span className="text-[black] absolute top-[205.3px]">__________________</span>
                {/* <span className="text-[black] absolute top-[181.3px]">__________________</span><span className="ml-[120px] underline">E-Mail*:</span><span className="text-[red] underline">abcbook@gmail.com </span> <span className="text-[black] absolute top-[181.3px]">______</span> */}
                </Text> <br />
                <Text className="text-[13px] text-[black] pl-2 ">PAN No*: <span className="text-[red] underline">AAACA1234D </span><span className="text-[black] absolute top-[205.3px]">__________________</span>
                <span className="text-[black] absolute top-[229.1px]">__________________</span><span className="ml-[120px] underline"> ( Copy Enclosed ) GST. No*:</span><span className="text-[red] underline"> GSTIN AAACA1234DIZL </span><span className="text-[black] absolute top-[229.1px]">__________________</span>
                {/* <span className="text-[black] absolute top-[181.3px]">__________________</span><span className="ml-[120px] underline">E-Mail*:</span><span className="text-[red] underline">abcbook@gmail.com </span> <span className="text-[black] absolute top-[181.3px]">______</span> */}
                </Text> <br />
                <Text className="text-[13px] text-[black] pl-2 ">PAN No*: <span className="text-[red] underline">(Copy enclosed or in case if not registered with GST then furnish declaration in Annexure-B) </span>
                {/* <span className="text-[black] absolute top-[181.3px]">__________________</span><span className="ml-[120px] underline">E-Mail*:</span><span className="text-[red] underline">abcbook@gmail.com </span> <span className="text-[black] absolute top-[181.3px]">______</span> */}
                </Text> <br />
                <Text className="text-[13px] text-[black] pl-2 ">Year of establishment of business: <span className="text-[red] underline">2011 </span><span className="text-[black] absolute top-[278.3px]">__________________________________________</span>
                {/* <span className="ml-[120px] underline">E-Mail*:</span><span className="text-[red] underline">abcbook@gmail.com </span> <span className="text-[black] absolute top-[181.3px]">______</span> */}
                </Text>
                
            </div>
          </View>
          {/* 2 */}
        
        </Page>
      </Document>
    </>
  );
};

export default Reactpdf;

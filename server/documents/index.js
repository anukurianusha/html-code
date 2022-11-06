module.exports = ({ name, price1, price2, receiptId }) => {
  const today = new Date();
  return `
  <!doctype html>
  <html>
     <head>
        <meta charset="utf-8">
        <title>PDF Result Template</title>
        <style>
        .root-box {
           margin: auto;
           max-width: 100%;
           border: 4px solid #eee;
                 }
           .iconDetails {
            margin-left:2%;
           float:left; 
           height:60px;
           width:6
           
           0px;	
           } 
           
           .container2 {
             width:100%;
             height:100%;
    
      
           }
           h4 {
               margin:0px;
           }
.inline{
 display: inline-block;
}
h4{
font: normal normal bold 24px/29px Inter;
letter-spacing: 1.15px;
color: #202040;
}
.photo{
 border: 1px;
 background: #F3F3F3 0% 0% no-repeat padding-box;
border: 1px solid #D2CECE;
border-radius: 4px;
text-align: center;
font: normal normal normal 11px/20px Inter;
color: #828282;
 justify-content: center;
padding: 40px;
}
.grid-container2 {
  display: grid;
  grid-template-columns: 8fr 8fr;
  grid-gap: 4px;
  /* padding-left: 4px; */
}
.photos-box{
 display: flex;
justify-content: space-between;
align-items: flex-start;
}
table {
width: 100%;
text-align:start;
padding:2px;
}

th, td {
text-align:start;
}
.footer{
 border: 1px solid #ddd;
 display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 1px;
  padding-left: 7px;
}
.input{
  border: 1px solid #D2CECE;
border-radius: 4px;
color: #00BAFF;
font: normal normal bold 12px/20px Inter;
}
.border-table {
  border-collapse: collapse;
  border: 1px solid #D2CECE;
  border-radius: 4px;
  width: 100%;
  padding:4px;
    text-align:start;
  }
.border-th{
  border: 1px solid #D2CECE;
  border-collapse: collapse;
  text-align:start;
  height:20%;
  width:10%;
font: normal normal normal 16px/20px Inter;
letter-spacing: 0.77px;
color: #202040;
opacity: 1;
CSS copied

}
.parent-table{
  width:10%;
  border: 1px solid #D2CECE;
  // padding:4px;
  border-collapse: collapse;
  text-align:start;
  height:20%;
}
p{
font: normal normal normal 14px/21px Inter;
letter-spacing: 0.86px;
color: #616161;
}

label{
  text-align: left;
font: normal  14px/20px Inter;
color: #202040;

}
.dynamic-text{
  color: #00BAFF;
font: normal normal bold 12px/20px Inter;
letter-spacing: 0.77px;
}
 </style>
     </head>
     <body>
     <div class="root-box">
      <table style="width:100%;background-color:#F0FBFF;">
        <td>
         <div class='container2'>
          <td>
              <table>
                 <div>
                    <img src="https://media.glassdoor.com/sqll/4343544/onesaz-squarelogo-1627544065165.png" height="80" >
                 </div>	
               </table>

              </td>
          
              <td>
           <table>
              <h4> &nbsp;&nbsp;Bhashyam High School</h4>
              <div><p>&nbsp;&nbsp;&nbsp;&nbsp;Battupally,Warangal,Telangana,500164</p></div>
          </table>

        </td>
   
        </div>
        </td>
      
    </div>
    </table>
      </br>
     <table style="background-color:#F0FBFF;padding:4px">
     <tr>
    <td >  Stream/Class: <span class="dynamic-text">${name}</span></td>
     <td>   Application Form: <span class="dynamic-text">${name}</span></td>
     </tr>
     </table>
     </br>
     <table style="background-color:#F3F3F3;padding:4px">
     <tr>
     <td>    Application Number:  <span class="dynamic-text">${name}</span></td>
     <td>     Admission Type: <span class="dynamic-text">${name}</span></td>
     <td>     Application Date: <span class="dynamic-text">${name}</span></td>
     </tr>
     </table>
     </br>
      <label style="margin-left:20px; font: normal normal bold 16px/20px Inter;"> Student Information</label>
       <table border=0 style="padding:4px">
           <tr>
           <td>
       <table>
        <tr>
         <td>
          <label for="name">Full name: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text"  id="name" name="name" size="30" value="${name}" class="input"></br>  </label>
          </br> 
          </td>
         </tr>
         
        <tr>
        <td> 
       <label for="name">Date Of Birth: &nbsp;<input type="text" id="name" name="name"  size="30" value="${name}" class="input" ></br>  </label>
       </br>  
       </td>
         </tr>
         
        <tr>
         <td> 
         <label for="name">Gender:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <div class="inline"><input type="checkbox" value="true">Male</div>
         <div class="inline"><input type="checkbox" value="true">Female</div>
         </label>
        </td> 
         </tr>
          </table>
        </td>
     <td>
     <table>
        <div class="photos-box">

        <th> 
     <div class="photo">
     <span> Photo of</br>Student</span>
   </div>
     </th> 
     <th> 
     <div class="photo">  <span> Photo of</br>Father</span></div>
     </th> 
     <th> 
     <div class="photo">   <span> Photo of</br>Mother</span></div>
     </th> 
     </div>
     </table>
   
     </td>
     </tr>
     </table>
     <table>
     <td>
        <table>
     <tr>
     <td>
      <label for="name">Place Of Birth: &nbsp;<input type="text" id="name" name="name" size="30"  class="input" value="${name}"><br>  </label>
      </td>
     </tr>
     <tr>
     <td> 
     <label for="name">Nationality: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" id="name" name="name"  size="30" value="${name}" class="input" ><br>  </label>
     </td>
     </tr>
     <tr>
     <td>
      <label for="name">2<sup>nd</sup>Language:&nbsp;&nbsp;&nbsp;<input type="text"   id="name" name="name" size="30" value="${name}"  class="input"><br>  </label>
      </td>
     </tr>
     </table>
     </td>
     <td>
     <table>
     <tr>
     <td>
      <label for="name">Religion:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text"   id="name" name="name" value="${name}" size="30"  class="input"><br>  </label>
      </td>
     </tr>
     <tr>
     <td> 
     <label for="name">Caste:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" id="name"  value="${name}" name="name"  size="30" value="" class="input" ><br>  </label>
     </td>
     </tr>
     <tr>
     <td>
      <label for="name">3<sup>rd</sup>Language: &nbsp;<input type="text"   id="name" name="name" size="30"  value="${name}"  class="input"><br>  </label>
      </td>
     </tr>
     </table>
     </td>
     </table>
     </br> 
     <div style="overflow-x:auto;padding:5px;">
     <table  class="border-table">
       <tr>
         <th  class="border-th">Brothers or Sisiters</th>
         <th class="border-th" >Class</th>
         <th  class="border-th" >Division</th>
        
             </tr>
       <tr>
       <td class="parent-table">&nbsp; <span class="dynamic-text">${name}</span></td>
       <td class="parent-table"> <span class="dynamic-text">${name}</span></td>
       <td class="parent-table"> <span class="dynamic-text">${name}</span></td>
        
       </tr>
       <tr>
       <td class="parent-table">&nbsp; <span class="dynamic-text">${name}</span></td>
       <td class="parent-table"> <span class="dynamic-text">${name}</span></td>
       <td class="parent-table"><span class="dynamic-text">${name}</span></td>
       </tr>
       <tr>
       <td class="parent-table">&nbsp; <span class="dynamic-text">${name}</span></td>
       <td class="parent-table"> <span class="dynamic-text">${name}</span></td>
       <td class="parent-table"> <span class="dynamic-text">${name}</span></td>
          
       </tr>
     </table>
   </div>
   <!-- Father Table-->

   <label style="margin-left:20px; font: normal normal bold 16px/20px Inter;"> Parent Information</label>
 
     <div style="overflow-x:auto;padding:5px;">
   <table  class="border-table">
       <tr>
       <td class="parent-table">Father Name</td>
       <td class="parent-table"> <span class="dynamic-text">${name}</span></td>
        </tr>
       <tr>
         <td class="parent-table">Father Qualification</td>
         <td class="parent-table"> <span class="dynamic-text">${name}</span></th>
       </tr>
       <tr>
          <td class="border-th">Father occupation</td>
          <td class="border-th"> <span class="dynamic-text"> ${name}</span></th>

       </tr>
       <tr>
          <td class="parent-table">Father Email Id</td>
          <td class="parent-table">  <span class="dynamic-text">${name}</span></th>
       
       </tr>
       <tr>
        <td class="parent-table">Annual Income</td>
        <td class="parent-table"> <span class="dynamic-text">${name}</span></th>
     
     </tr>
     </table>
   </div>
   </br>
   <!-- Mother Table-->
   <div style="overflow-x:auto;padding:5px;">
   <table  class="border-table">
       <tr>
       <td class="parent-table">Mother Name</td>
       <td class="parent-table">  <span class="dynamic-text">${name}</span></td>
        </tr>
       <tr>
         <td class="parent-table">Mother Qualification</td>
         <td class="parent-table"> <span class="dynamic-text">${name}</span></th>
       </tr>
       <tr>
          <td class="parent-table">Mother occupation</td>
          <td  class="parent-table">  <span class="dynamic-text">${name}</span></th>

       </tr>
       <tr>
          <td class="parent-table">Mother Email Id</td>
          <td class="parent-table">  <span class="dynamic-text">${name}</span></th>
       
       </tr>
       <tr>
        <td class="parent-table">Annual Income</td>
        <td class="parent-table">  <span class="dynamic-text">${name}</span></th>
     
     </tr>
     </table>
   </div>
   <p style="padding-left:5px;">I hereby declare that the information given above is true to the of my Knowledge and belief. My Son / daughter will abide by the rules of the school force from time to time.</p>
   <table style="background: #F6F6F6 0% 0% no-repeat padding-box;">
   <td>
<table>
<tr>
<td>Date: <span class="dynamic-text">${name}</span></td>
</tr>
<tr>
<td>Signature Of Principal:__________________</td>
</tr>
</table>
   </td>
   <td>
   <table>
   <tr>
   <td>Signature Of Father:___________________</td>
   </tr>
   <tr>
   <td>Signature Of Mother:__________________</td>
   </tr>
   </table>
   </td>
   </table>
   <span style="margin-left:5px;">Note: Incomplete applicant cant be consider</span>
   </br>
      </div>
      </body>
  </html>

    `;
};

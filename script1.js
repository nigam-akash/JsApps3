
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
    }
};
xhttp.open("GET", "Multi_Roll_creation.xml", true);
xhttp.send();
let ab;
let abb;
let abb1;
let div;
let createParentDiv;
let createParentFieldset;
function myFunction(xml) {
    var x, i, xmlDoc, txt;
    xmlDoc = xml.responseXML;
    txt = ""; 
    x = xmlDoc.getElementsByTagName('TBODY');
    for (i = 0 ; i <x.length; i++) {
        txt += x[i].childNodes[0].nodeValue;
    }
    let uiContainer1 = document.getElementById("uiContainer").innerHTML = txt;
    let ParentDiv1 = createParentDiv = document.createElement('div');
    createParentDiv.id="ParentDiv1";
    let inputfield;
     ab = Array.from(x);
     abb = ab[0].childNodes[1].children;
    abb1 = Array.from(abb);   
    let head_div = document.createElement('div');
    let header = document.createElement('header');
    header.style.border = '2px solid black';
    header.style.textAlign='center';
    header.innerHTML='HEADER';
    header.style.fontSize='40px';
    head_div.appendChild(header);

    createParentDiv.appendChild(head_div);
    let footer = document.createElement('footer');
    footer.style.border = '2px solid black';
    footer.style.textAlign='center';
    footer.innerHTML='FOOTER';
    footer.style.fontSize='40px';
    let footer_div = document.createElement('div');   
   for(let tbody_index = 0; tbody_index < abb1.length; tbody_index++){
    let section = abb1[tbody_index].attributes[0].value;
    let divField;
    let divfield1;
    let fieldset1;
    
     divField = document.createElement('div');
         fieldset1 = document.createElement('div');
         fieldset1.id = section;
         console.log('nigam',section);
        fieldset1.style.display="flex";
        fieldset1.style.justifyContent="space-between";

    for(let section_index = 0; section_index < abb1[tbody_index].children.length; section_index++){
       let divID = abb1[tbody_index].children[section_index].attributes[0].value;
        divfield1 = document.createElement('div');
        fieldsetfield = document.createElement('fieldset');
        fieldset1.appendChild(divfield1);
        divfield1.appendChild(fieldsetfield);

        for(let fieldset_index = 0; fieldset_index < abb1[tbody_index].children[section_index].children.length; fieldset_index++ ){
            let check1;  
            let table = document.createElement('table');
            table.id = 'tbl_id';
            let tr = document.createElement('tr');
            let thead = document.createElement('thead');
            thead.id = "table_css";

            for(let checking_SE_ME = 4; checking_SE_ME < abb1[tbody_index].children[section_index].children[fieldset_index].children.length; checking_SE_ME++){
            check1 = abb1[tbody_index].children[section_index].children[fieldset_index].attributes[0].value;        
            fieldsetfield.id =check1;
            divfield1.id = divID;
            let function1; 

            if(abb1[tbody_index].children[section_index].children[fieldset_index].attributes[1].value === 'SE'){                                     
            let FIELD_LBL;
            let FIELD_VALUE;
            let FIELD_NAME;
            let FIELD_type;
            let id;
            let size;
            let maxlength;    
            FIELD_NAME = abb1[tbody_index].children[section_index].children[fieldset_index].children[checking_SE_ME].getElementsByTagName('NAME')[0].innerHTML;
            FIELD_type = abb1[tbody_index].children[section_index].children[fieldset_index].children[checking_SE_ME].getElementsByTagName('TYPE')[0].innerHTML;
            FIELD_LBL = abb1[tbody_index].children[section_index].children[fieldset_index].children[checking_SE_ME].getElementsByTagName('LBL')[0].innerHTML;
            size = abb1[tbody_index].children[section_index].children[fieldset_index].children[checking_SE_ME].getElementsByTagName('SIZE')[0].innerHTML;
            maxlength = abb1[tbody_index].children[section_index].children[fieldset_index].children[checking_SE_ME].getElementsByTagName('MAXLENGTH')[0].innerHTML;
            
            try{
            
                FIELD_VALUE = abb1[tbody_index].children[section_index].children[fieldset_index].children[checking_SE_ME].getElementsByTagName('VALUE')[0].innerHTML;
                function1 = abb1[tbody_index].children[section_index].children[fieldset_index].children[checking_SE_ME].getElementsByTagName('FUNCTION')[0].innerHTML;
                id = abb1[tbody_index].children[section_index].children[fieldset_index].children[checking_SE_ME].getElementsByTagName('ID')[0].innerHTML;
            }catch(err){
                console.log(err);
            }
            
            if(typeof FIELD_VALUE ==="undefined" || function1 ==="undefined" || id ==="undefined")
            {
                FIELD_VALUE="";
                function1="";
                id = "";
            }else{
                FIELD_VALUE = abb1[tbody_index].children[section_index].children[fieldset_index].children[checking_SE_ME].getElementsByTagName('VALUE')[0].innerHTML;
            
                function1 = abb1[tbody_index].children[section_index].children[fieldset_index].children[checking_SE_ME].getElementsByTagName('FUNCTION')[0].innerHTML;
                id = abb1[tbody_index].children[section_index].children[fieldset_index].children[checking_SE_ME].getElementsByTagName('ID')[0].innerHTML;
            }
             let inputdiv;            
                    inputdiv = document.createElement('div');
                
                  inputfield = document.createElement('input');  
                 let label = document.createElement('label');
                  label.setAttribute('for',FIELD_NAME);
                  if(FIELD_type != 'BUTTON'){
                    if(FIELD_type != 'HIDDEN'){
                  label.style.display = 'inline-block';
                  label.style.width = '108px';
                  }
                }                    
                inputfield.type = FIELD_type;
                inputfield.id = FIELD_NAME;
                inputfield.name = FIELD_NAME;
                inputfield.setAttribute('size',size);
                inputfield.setAttribute('maxlength',maxlength)                 
                inputfield.value = FIELD_VALUE;       
                if(FIELD_type === 'BUTTON'){                    
                inputfield.setAttribute('onclick',function1);                  
                }         
             let addLebel = fieldsetfield.appendChild((document.createTextNode(`${FIELD_LBL}`)));   
             label.appendChild(addLebel);
            if(FIELD_type === 'BUTTON')
            {
                fieldsetfield.appendChild(inputfield);  
            }
            if(FIELD_type !== 'BUTTON'){
                fieldsetfield.appendChild(inputfield);            
            inputdiv.appendChild(label);
            inputdiv.appendChild(inputfield);             
            fieldsetfield.appendChild(inputdiv);
            }
           
        }
    
        else if(abb1[tbody_index].children[section_index].children[fieldset_index].attributes[1].value === 'ME'){     
                 FIELD_LBL = abb1[tbody_index].children[section_index].children[fieldset_index].children[checking_SE_ME].getElementsByTagName('LBL')[0].innerHTML;
                let th = document.createElement('th');    
                th.innerText = FIELD_LBL;   
                tr.appendChild(th);    
                thead.appendChild(tr);
                table.appendChild(thead);
                
            fieldsetfield.appendChild(table);        
        }
        console.log(function1);
        }
        table.appendChild(thead);     
        }
    } 
    createParentDiv.appendChild(fieldset1);
    footer_div.appendChild(footer);
    createParentDiv.appendChild(footer_div);
    document.body.appendChild(createParentDiv);
    document.getElementById("uiContainer").appendChild(ParentDiv1);
} 
   }
   let table = document.getElementById('tbl_id');

   function addMoreRows() {
      var newRow = document.getElementById('tbl_id').insertRow();

      var newCell = newRow.insertCell();
      newCell.innerHTML="<tr><td><input type='checkbox'></td></tr>";

      newCell = newRow.insertCell();       
      newCell.innerHTML="<tr><td><input type='text'></td></tr>";

      newCell = newRow.insertCell();
      newCell.innerHTML="<tr><td><input type='image' src='lov_search.png' alt='lov_search' onclick='akash()'></td></tr>";

      newCell = newRow.insertCell();
      newCell.innerHTML="<tr><td><input type='text'></td></tr>";
         
    }                                

    function deleteCheckedRows() {
        var table = document.getElementById("tbl_id");
        var checkboxes = table.querySelectorAll("input[type='checkbox']");

        checkboxes.forEach(function (checkbox) {
            if (checkbox.checked) {
                var row = checkbox.closest("tr");
                row.parentNode.removeChild(row); 
            }
        });
    }




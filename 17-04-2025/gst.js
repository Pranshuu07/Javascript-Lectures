function bill(){
    
    amount = document.getElementById("price").value;
    gst_p = document.getElementById("gst").value;

    amount = +amount;
    gst_p = +gst_p;
   
      switch(gst_p){
        case 18 :        
        gst_amount = (amount*18)/100       
        document.getElementById("final_amount").innerHTML = gst_amount+amount;
        document.getElementById("print_gst").innerHTML = gst_amount;          
        break;
        case 2 :        
        gst_amount = (amount*2)/100       
        document.getElementById("final_amount").innerHTML = gst_amount+amount;
        document.getElementById("print_gst").innerHTML = gst_amount;          
        break;
        case 9 :        
        gst_amount = (amount*9)/100       
        document.getElementById("final_amount").innerHTML = gst_amount+amount;
        document.getElementById("print_gst").innerHTML = gst_amount;          
        break;
        case 16 :        
        gst_amount = (amount*16)/100       
        document.getElementById("final_amount").innerHTML = gst_amount+amount;
        document.getElementById("print_gst").innerHTML = gst_amount;          
        break;
        default: alert("Select GST % first...")
    }
   

    


    


}
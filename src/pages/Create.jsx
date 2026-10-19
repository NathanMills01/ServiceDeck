function Create()
{
    return(
        <>
        <h6>Job/New Job</h6>
        <h1>Create Service Job</h1>
        <br/>
        <h3>1. Customer Information</h3>
        <form action="">
            <label for="CustomerName">Customer Name*</label><br/>
            <input type="text" id="CustomerName" name="fname" placeholder="Enter Customer Name"/><br/>
            <label for="Email">Email:</label><br/>
            <input type="text" id="Email" name="Email" placeholder="Email Address"/><br/>
            <label for="PhoneNumber">Phone Number</label><br/>
            <input type="text" id="PhoneNumber" name="PhoneNumber" placeholder="Enter Phone Number"/><br/><br/>
        </form>
        <h3>2. Job Details</h3>
        <form>
            <label for = "Device">Device/Equipment*</label><br/>
            <input type="text" id="Device" placeholder="e.g. Gaming PC, iPhone 13, laptop"/>
            <br/>
            <label for = "Problem Description">Problem Description*</label><br/>
            <input type="text" id="ProblemDescription" height={50} width={50}/><br/>
            <label for = "Job Status">Job Status*</label>
            <br/>
            
            <select name="JobStatus" id="JobStatus">                
            <option value="Pending">Pending</option>
            <option value="OnHold">On Hold</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
            </select>


        </form>

        <h3>3. Assignment and Pricing</h3>
         <select name="EmployedTechnicians" id="EmployedTechnicians">                
            <option value="JohnDoe">John Doe</option>
            <option value="GaryStu">Gary Stu</option>
            <option value="CharlieBrown">CharlieBrown</option>
            </select>
            <br/>
            <form>
                <label for = "EstimatedCost">Estimated Cost($)*</label><br/>
                <input type="text" id="Price" placeholder="0.00"/>
                <br/>
            </form>
            <br/>

            


        <input type="submit" value={"Create Job"}/>
        <input type="submit" value={"Cancel"}/>


        </>

    )


}

export default Create
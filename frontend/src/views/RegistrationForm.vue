<template>
  <div class="reg">
    <div class="head"><h1>Registration Form</h1></div>
    <div class="title">
      <b-container class="bv-example-row mb-4">
        <b-row cols="3">
          <b-col
            ><b-form @submit="onSubmit">
              <b-form-group
                id="input-group-1"
                label="Form no:"
                label-for="input-1"
                class=" form"
              >
                <b-form-input
                  id="input-1"
                  v-model="form.form_no"
                  required
                  placeholder="Enter form no"
                ></b-form-input>
              </b-form-group> </b-form
          ></b-col>
          <b-col>
            <b-form-group
              id="input-group-2"
              label="Surname:"
              label-for="input-2"
              class="surname"
            >
              <b-form-input
                id="input-2"
                v-model="form.surname"
                required
                placeholder="Enter Surname"
              ></b-form-input> </b-form-group
          ></b-col>
          <b-col>
            <b-form-group
              id="input-group-3"
              label="Firstname:"
              label-for="input-3"
              class="firstname"
            >
              <b-form-input
                id="input-3"
                v-model="form.firstname"
                required
                placeholder="Enter firstname"
              ></b-form-input> </b-form-group
          ></b-col>
          <b-col>
            <b-form-group
              id="input-group-4"
              label="Othernames:"
              label-for="input-4"
              class="others"
            >
              <b-form-input
                id="input-4"
                v-model="form.othernames"
                required
                placeholder="Enter othernames"
              ></b-form-input> </b-form-group
          ></b-col>

          <b-col>
            <b-form-group
              id="input-group-5"
              label="Contact Address:"
              label-for="input-5"
              class="address"
            >
              <b-form-input
                id="input-5"
                v-model="form.contactaddress"
                required
                placeholder="Enter Address"
              ></b-form-input> </b-form-group
          ></b-col>
          <b-col>
            <b-form-group
              id="input-group-6"
              label="Nationality:"
              label-for="input-6"
              class="nation"
            >
              <b-form-input
                id="input-6"
                v-model="form.nationality"
                required
                placeholder="Enter Nationality"
              ></b-form-input> </b-form-group
          ></b-col>

          <b-col>
            <b-form-group
              id="input-group-7"
              label="State:"
              label-for="input-7"
              class="state"
            >
              <b-form-select
                id="input-7"
                value-field="state.name"
                text-field="state.name"
                v-model="form.state"
                :options="state"
                required
                tex="Select State"
              ></b-form-select> </b-form-group
          ></b-col>

          <b-col>
            <b-form-group
              id="input-group-37"
              label="Local Government:"
              label-for="input-37"
              class="lgt"
            >
              <b-form-select
                id="input-37"
                value-field="name"
                text-field="name"
                v-model="form.localGov"
                :options="localGov"
                required
              ></b-form-select> </b-form-group
          ></b-col>

          <b-col>
            <b-form-group
              id="input-group-8"
              label="Town:"
              label-for="input-8"
              class="Town"
            >
              <b-form-input
                id="input-8"
                v-model="form.town"
                required
                placeholder="Enter Town"
              ></b-form-input> </b-form-group
          ></b-col>

          <b-col>
            <b-form-group
              id="input-group-9"
              label="Phone No:"
              label-for="input-9"
              class="phone"
            >
              <b-form-input
                id="input-9"
                v-model="form.phoneno"
                required
                placeholder="Enter Phone No"
              ></b-form-input> </b-form-group
          ></b-col>

          <b-col
            ><b-form-group
              id="input-group-11"
              label="Email:"
              label-for="input-5"
              class="email"
            >
              <b-form-input
                id="input-11"
                v-model="form.emailadd"
                required
                placeholder="Enter Email Address"
              ></b-form-input>
            </b-form-group>
          </b-col>

          <b-col>
            <b-form-group
              id="input-group-39"
              label="Date of Birth:"
              label-for="input-39"
              class="birth"
            >
            
           <b-form-datepicker
      id="input-39"
      v-model="form.date"
     required
     placeholder="Choose a date"
           ></b-form-datepicker>
            </b-form-group>
          </b-col>

          <b-col
            ><b-form-group
              id="input-group-12"
              label="Gender:"
              label-for="input-12"
              class="gender"
            >
              <b-form-select
                id="input-12"
                v-model="form.gender"
                :options="gender"
                required
                placeholder="Enter Gender"
              ></b-form-select> </b-form-group
          ></b-col>

          <b-col
            ><b-form-group
              id="input-group-13"
              label="Status:"
              label-for="input-13"
              class="status"
            >
              <b-form-select
                id="input-13"
                v-model="form.status"
                :options="status"
                required
              ></b-form-select> </b-form-group
          ></b-col>

          <b-col>
            <b-form-group
              id="input-group-14"
              label="Disability:"
              label-for="input-14"
              class="disable"
            >
              <b-form-radio
                id="input-14"
                name="selected"
                v-model="form.disable"
                :options="disable"
                >Yes</b-form-radio
              >
              <b-form-radio
                id="input-87"
                name="selected"
                v-model="form.disable"
                :options="disable"
              >
                No
              </b-form-radio>
            </b-form-group>
          </b-col>

          <b-col>
            <b-form-group
              id="input-group-15"
              label="If yes, Specify"
              label-for="input-15"
              class="specify"
            >
              <b-form-textarea
                id="input-15"
                v-model="form.specify"
                :options="specify"
                placeholder="Comment here"
              ></b-form-textarea>
            </b-form-group>
          </b-col>

          <b-col>
            <b-form-group
              id="input-group-16"
              label="Education Qualification:"
              label-for="input-16"
              class="educate"
            >
              <b-form-select
                id="input-16"
                v-model="form.education"
                :options="education"
                required
              ></b-form-select> </b-form-group
          ></b-col>

          <b-col>
            <b-form-group
              id="input-group-17"
              label="Have you been trained by ITF before"
              label-for="input-17"
              class="trained"
            >
              <b-form-radio
                id="input-17"
                name="tra"
                v-model="form.train"
                :options="train"
                >Yes</b-form-radio
              >
              <b-form-radio
                id="input-99"
                name="tra"
                v-model="form.train"
                :options="train"
              >
                No
              </b-form-radio>
            </b-form-group>
          </b-col>

          <b-col>
            <b-form-group
              id="input-group-18"
              label="If Yes, in which Trade Area?"
              label-for="input-18"
            >
              <b-form-textarea
                id="input-18"
                v-model="form.trained"
                :options="trained"
                placeholder="Comment here"
              ></b-form-textarea>
            </b-form-group>
          </b-col>

          <b-col>
            <b-form-group
              id="input-group-19"
              label="Are you working presently?"
              label-for="input-19"
              class="working"
            >
              <b-form-radio 
              id="input-19"
              name="select"
               v-model="form.work"
                :options="work"
                >Yes</b-form-radio
              >
              <b-form-radio
                id="input-90"
                name="select"
                v-model="form.work"
                :options="work"
              >
                No
              </b-form-radio>
            </b-form-group>
          </b-col>

          <b-col>
            <b-form-group
              id="input-group-20"
              label="If Yes, where?"
              label-for="input-20"
            >
              <b-form-textarea
                id="input-20"
                v-model="form.where"
                :options="where"
                placeholder="Comment here"
              ></b-form-textarea>
            </b-form-group>
          </b-col>

         <b-col>
       <b-form-group
              id="input-group-41"
              label="Date :"
              label-for="input-41"
              class="dates"
            >
            
           <b-form-datepicker
      id="input-41"
      v-model="form.dates"
     required
     placeholder="Date Registered"
           ></b-form-datepicker>
            </b-form-group></b-col>
          <b-col>
            <b-form-group
              id="input-group-42"
              label="Year:"
              label-for="input-42"
              class="year"
            >
              <b-form-input
                id="input-42"
                v-model="form.year"
                required
                placeholder="Enter Year"
              ></b-form-input> </b-form-group
          ></b-col> 




        </b-row>
      </b-container>

      <br />
      <br />
      <!-- section for Next of Kin Details -->
      <label class="kin"> <u> Next of Kin Details </u></label>

      <b-container class="bv-example-row mb-4">
        <b-row cols="3">
          <b-col>
            <b-form-group
              id="input-group-21"
              label="Full Name "
              label-for="input-21"
              class="kin"
            >
              <b-form-input
                id="input-21"
                v-model="form.kinname"
                required
                placeholder="Enter Full Name"
              ></b-form-input>
            </b-form-group>
          </b-col>

          <b-col>
            <b-form-group
              id="input-group-22"
              label="Phone No"
              label-for="input-22"
              class="Phone"
            >
              <b-form-input
                id="input-22"
                v-model="form.kinphone"
                required
                placeholder="Enter Phone No"
              ></b-form-input>
            </b-form-group>
          </b-col>

          <b-col>
            <b-form-group
              id="input-group-36"
              label="Email Address "
              label-for="input-36"
              class="add"
            >
              <b-form-input
                id="input-36"
                v-model="form.kinemail"
                required
                placeholder="Enter Email Address"
              ></b-form-input>
            </b-form-group>

           
          </b-col>
        </b-row>
      </b-container>
      <!-- End Section for Next of Kin -->
      <!-- Section for Grantor Details -->
      <label for="grantor"> <u> Details of Guarantor </u></label>
      <b-container class="bv-example-row mb-4">
        <b-row cols="3">
          <b-col>
            <b-form-group
              id="input-group-23"
              label="Name of Guarantor"
              label-for="input-23"
              class="grantor"
            >
              <b-form-input
                id="input-23"
                v-model="form.grantor"
                required
                placeholder="Enter Guarantor Name"
              ></b-form-input>
            </b-form-group>
          </b-col>

          <b-col>
            <b-form-group
              id="input-group-24"
              label="Address of Guarantor"
              label-for="input-24"
              class="addresss"
            >
              <b-form-input
                id="input-24"
                v-model="form.addressgrantor"
                required
                placeholder="Enter Guarantor Address"
              ></b-form-input>
            </b-form-group>
          </b-col>
      <b-col>
          <b-form-group
            id="input-group-25"
            label="Phone of Guarantor"
            label-for="input-25"
            class="number"
          >
            <b-form-input
              id="input-25"
              v-model="form.grantornumber"
              required
              placeholder="Enter Phone No "
            ></b-form-input>
          </b-form-group>
      </b-col>

          <b-col>
            <b-form-group
              id="input-group-26"
              label="Email Address for Guarantor"
              label-for="input-26"
              class="gran"
            >
              <b-form-input
                id="input-26"
                v-model="form.emailgrantor"
                required
                placeholder="Enter Email Address "
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
      </b-container>

      <!-- End Section for Grantor Details -->
      <!-- Section for Bank Details -->
      <div><u>Bank Details</u></div>
      <b-container class="bv-example-row mb-4">
        <b-row cols="3">
          <b-col>
            <b-form-group
              id="input-group-27"
              label="Beneficicary Name"
              label-for="input-27"
              class="beneficiary"
            >
              <b-form-input
                id="input-27"
                v-model="form.beneficiary"
                required
                placeholder="Enter Beneficiary Name"
              ></b-form-input>
            </b-form-group>
          </b-col>

          <b-col>
            <b-form-group
              id="input-group-28"
              label="Bank Code"
              label-for="input-28"
              class="code"
            >
              <b-form-input
                id="input-28"
                v-model="form.code"
                required
                placeholder="Enter Bank Code"
              ></b-form-input>
            </b-form-group>
          </b-col>

          <b-col>
            <b-form-group
              id="input-group-29"
              label="Account Number"
              label-for="input-29"
              class="acct"
            >
              <b-form-input
                id="input-29"
                v-model="form.account"
                required
                placeholder="Enter Account Nunmber"
              ></b-form-input>
            </b-form-group>
          </b-col>

          <b-col>
            <b-form-group
              id="input-group-30"
              label="Amount to be Paid"
              label-for="input-30"
              class="amount"
            >
              <b-form-input
                id="input-30"
                v-model="form.amount"
                required
                placeholder="Enter Amount to be Paid"
              ></b-form-input>
            </b-form-group>
          </b-col>

          <b-col>
            <b-form-group
              id="input-group-40"
              label="Bank Name"
              label-for="input-40"
              class="bankname"
            >
              <b-form-input
                id="input-40"
                v-model="form.bankname"
                required
                placeholder="Enter Bank Name"
              ></b-form-input>
            </b-form-group>
          </b-col>

          <b-col>
            <b-form-group
              id="input-group-32"
              label="Verified Account Name"
              label-for="input-32"
              class="verified"
            >
              <b-form-input
                id="input-32"
                v-model="form.verified"
                required
                placeholder="Enter Verified Name"
              ></b-form-input>
            </b-form-group>
          </b-col>

          <b-col>
            <b-form-group
              id="input-group-33"
              label="Name of Training Centre"
              label-for="input-33"
              class="center"
            >
              <b-form-input
                id="input-33"
                v-model="form.centre"
                required
                placeholder="Name of Training Centre"
              ></b-form-input>
            </b-form-group>
          </b-col>

          <b-col>
            <b-form-group
              id="input-group-34"
              label="Trainee's Phone Number"
              label-for="input-34"
              class="trainee"
            >
              <b-form-input
                id="input-34"
                v-model="form.trainee"
                required
                placeholder="Enter Trainee's Phone Number"
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
      </b-container>
      <b-form>
        <b-button type="submit" class="btn" variant="danger"
          >Register</b-button
        >
      </b-form>
      <br>
      
    </div>
  </div>
</template>

<script>
import state from "../state.json";

export default {
  data() {
    return {
      form: {
        form_no:"", surname:"", firstname:"", othernames:"",contactaddress:"", 
        email: "", nationality: "", town:"", phoneno:"",emailadd:"",name: "", 
        state: "Abia State", localGov: "", gender: '', status:'',disable:"",
        specify:"", education:"", train:"", trainee:'', trained:'', where:"",
        work:"", date:'', dates:"", year:"", kinname:'', kinphone:'', kinemail:'',
        grantor:'', addressgrantor:'', grantornumber:'', emailgrantor:'',
        beneficiary:'', code:'', account:'', amount:'', bankname:'', center: '',
        verified:'',
        
        checked: [],
      },
      state,
      show: true,
      form_no:[], surname:[], firstname:[], othernames:[], nationality:[],
      town:[], email:[], emailadd:[],
      gender: ["Male", "Female"],
      status:["Single", "Married", "Others"],
       disable:[],
      specify:[],
     education:["SSCE", "OND", "ND", "HND", "BSC", "MSC", "Others"],
      train:[],
      trainee:[],
      where:[],
      work:[],
      trained:[],
      dates:[], year:[],
      

      
    };
  },
  validations:{

  },
  created() {
    console.log(state);
  },
  computed: {
    localGov() {
      return this.state.filter(
        (state) =>
          state.state.name.toLowerCase() == this.form.state.toLowerCase()
      )[0].state.locals;
    },
  },



  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
  },

};
</script>
<style scoped>
.reg {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0 20%;
  background: url("../assets/pattern.jpg");
}
.head {
  color: black;
  padding: 25px 0px;
}
h1 {
  text-align: center;
  font-family: 'Times New Roman', Times, serif;
  font-weight:900 ;
}

.title {
  background: white;
  text-align: justify;
 
  
}
.btn {
  
  margin-top: 10px;
}
.bv-example-row {
  padding-top: 20px;
  
}
textarea{
  width: 100%;
  margin: 15px 0px;
  box-shadow: 0 0 8px #e3e3e3 inset;
  border-color: #e3e3e3;
  border: 1px solid #e2e2e2;
  line-height: 50px;
  
}
.b-form-group{
  box-shadow: 0 0 8px #e3e3e3 inset;
  border-color: #e3e3e3;
  border: 1px solid #e2e2e2;
}

</style>
  
import React,{Component} from "react";
import UserFormDetails from "./userFormDetails";
import PersonalFormDetails from './personalFormDetails';
import Confirm from './confirm';
import Success from './success';
class userForm extends Component{
    constructor(){
        super();
    this.state={
        firstName:'',
        lastName:'',
        email:'',
        bio:'',
        number:'',
        step:1
    };
}
nextStep= ()=>{
    let {step}=this.state;
   this.setState({
       step:step+1
   });
}
prevStep=()=>{
    let {step}=this.state;
    this.setState({
            step:step-1
    });
}
handleChange= input =>e=>{
       this.setState({
            [input]:e.target.value
});
}
    render(){
      const {firstName,lastName,email,number,bio,step}=this.state;
      const value={firstName:firstName,lastname:lastName,email:email,number:number,bio:bio,
        step:step};
      switch(step){
          case 1:
              return (
                 <UserFormDetails
                 step={step} 
                 nextStep={this.nextStep}
                 handleChange={this.handleChange}
                 value={value}
                 ></UserFormDetails>
              );
         case 2:
             return(                 
             <PersonalFormDetails
                step={step} 
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                value={value}>
                </PersonalFormDetails>
                );
        case 3:
            return(
            <Confirm
            step={step} 
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            value={value}>
            </Confirm>
            );
        case 4:
            return(
            <Success></Success>);
        default :
            break;

      }
    }
};
export default  userForm;

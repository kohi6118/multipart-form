import React,{Component} from "react";
import MultiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
class PersonalFormDetails extends Component{
    continue = e=>{
        e.preventDefault();
         const {nextStep}=this.props;
         nextStep();
    }
    back = e=>{
        e.preventDefault();
         const {prevStep}=this.props;
         prevStep();
    }
    render(){
        const {handleChange}=this.props;
        const {value:{bio,number}}=this.props;
       return(
       <MultiThemeProvider>
            <React.Fragment>
            <AppBar title="user Personal Details"></AppBar>
            <TextField 
                hintText="enter your phone number"
                floatingLabelText="enter phone number"
                onChange={handleChange('number')}
                defaultValue={number}>
            </TextField>
            <br></br>
            <TextField
                hintText="enter your bio"
                floatingLabelText="enter bio"
                onChange={handleChange('bio') }           
                defaultValue={bio}>
            </TextField>
            <br></br>  
        <RaisedButton
            primary={false}
            onClick={this.back}
            style={style.button}
            >back</RaisedButton>
        <RaisedButton
            primary={true}
            onClick={this.continue}
            style={style.button}
            >continue </RaisedButton>         
            </React.Fragment>
        </MultiThemeProvider>
        );
    }
}
const style={
    button:{
     margin:15
    }
}
export default PersonalFormDetails;
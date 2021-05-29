import React,{Component} from "react";
import MultiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
class UserFormDetails extends Component{
    continue = e=>{
        e.preventDefault();
         const {nextStep}=this.props;
         nextStep();
    }
    render(){
        const {handleChange}=this.props;
        const {value:{firstName,lastname,email}}=this.props;
       return(
       <MultiThemeProvider>
            <React.Fragment>
            <AppBar title="user form details"></AppBar>
            <TextField
            hintText="enter your first name"
            floatingLabelText="enter firstname"
            onChange={handleChange('firstName')}
            defaultValue={firstName}
            >
            </TextField>
            <br></br>
            <TextField 
                hintText="enter your last name"
                floatingLabelText="enter last name"
                onChange={handleChange('lastName')}
                defaultValue={lastname}>
            </TextField>
            <br></br>
            <TextField
                hintText="enter your email"
                floatingLabelText="enter email @"
                onChange={handleChange('email') }           
                defaultValue={email}>
            </TextField>
            <br></br>
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
export default UserFormDetails;
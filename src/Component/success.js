import React,{Component} from "react";
import MultiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
class Success  extends Component{
    continue = e=>{
        e.preventDefault();
         const {nextStep}=this.props;
         nextStep();
    }
    render(){
       return(
       <MultiThemeProvider>
            <React.Fragment>
            <AppBar title="success!!!"></AppBar>
             <h1>thanks for submitting the form!!</h1>        
            </React.Fragment>
        </MultiThemeProvider>
        );
    }
}
export default Success;
import React,{Component} from "react";
import MultiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import List from "material-ui/List"
import ListItem from "material-ui/List/ListItem"
import RaisedButton from "material-ui/RaisedButton";
class Confirm extends Component{
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
        const {value:{firstName,lastName,email,bio,number}}=this.props;
       return(
       <MultiThemeProvider>
            <React.Fragment>
            <AppBar title="Confirm the user Details"></AppBar>
            <List>
                <ListItem
                primaryText="FirstName"
                secondaryText={firstName}>
                </ListItem>
                <ListItem
                primaryText="LasttName"
                secondaryText={lastName}>
                </ListItem>
                <ListItem
                primaryText="Email"
                secondaryText={email}>
                </ListItem>
                <ListItem
                primaryText="Number"
                secondaryText={number}>
                </ListItem>
                <ListItem
                primaryText="Bio"
                secondaryText={bio}>
                </ListItem>
            </List>
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
export default Confirm;
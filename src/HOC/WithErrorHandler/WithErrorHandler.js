/**
 * Created by kanamars on 27/07/19.
 */
import React, {Component} from 'react';
import Aux from '../Aux/Aux';
import Modal from "../../components/UI/Modal/Modal";

const withErrorHandler =(WrappedComponent, axios) => {
    return class extends Component{
        state = {
          error: null
        };
        errorConfirmHandler =()=>{
            this.setState({
                error:null
            })
        };
        componentWillMount(){
            axios.interceptors.request.use(reqConf => {
                this.setState({
                    error : null
                });
                return reqConf;
            }, error => {
                this.setState({
                    error : error
                })
            });
            axios.interceptors.response.use(resConf => resConf, error => {
                this.setState({
                    error: error
                })
            });
        }
        render(){
            return(
                <Aux>
                    <Modal show={this.state.error} modalClosed={this.errorConfirmHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props}/>
                </Aux>
            );
        }
    }
};
export default withErrorHandler;
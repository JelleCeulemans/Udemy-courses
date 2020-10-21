import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Auxiliary/Aux';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }
        componentWillmMount() {
            this.requestInterceptor = axios.interceptors.request.use(req => {
                this.setState({ error: null });
                return req;
            })
            this.responseInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({ error });
            });
        }

        componentWillUnmount() {
            console.log('Will Unmount', this.requestInterceptor, this.responseInterceptor);
            axios.interceptors.request.eject(this.requestInterceptor);
            axios.interceptors.response.eject(this.responseInterceptor);
        }

        errorConfirmedHandler = () => {
            this.setState({ error: null });
        }
        render() {
            return (
                <Aux>
                    <Modal show={this.state.error} clicked={this.errorConfirmedHandler}>{this.state.error?.message}</Modal>
                    <WrappedComponent  {...this.props} />
                </Aux>
            );
        }
    }
}

export default withErrorHandler;
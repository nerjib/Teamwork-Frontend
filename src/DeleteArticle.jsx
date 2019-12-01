import React from 'react';
import { Redirect } from 'react-router-dom';

export default class GetOneArticle extends React.Component {


        render(){
            const { params } = this.props.match;
            alert(params.id);
            fetch("https://powerful-garden-82332.herokuapp.com/api/v1/articles/"+params.id, {
                method: 'DELETE',
                headers:{
                 'token': localStorage.getItem('token'),
                }
            });
            return (
             <Redirect to='/home' />
            )

        }
    }
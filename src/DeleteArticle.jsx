import React from 'react';
import { Redirect } from 'react-router-dom';

export default class GetOneArticle extends React.Component {


        render(){
            const { params } = this.props.match;
            alert(params.id);
            fetch("/api/v1/articles/"+params.id, {
                method: 'DELETE'
                          });
            return (
             <Redirect to='/home' />
            )

        }
    }
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { CostomCard } from '../../components/';
import {reducerProductStore} from '../../store/ProductsState'
import mock from './mock.js'

const styles =(theme)=> ({
    root: {
      marginTop:100,
      display: "flex",
      flexWrap:"wrap",
      width:"90vw",
      border:"1px solid green",
      justifyContent: "center",
      alignContent:"flex-start"
    },
    card:{
        margin:20,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
});

class Home extends Component {
    // constructor(props){
    //     super(props);
    //     this.state={
    //         productList:mock.productList
    //     }
    // }
    render() {
        const { classes, productList} = this.props;
        console.log(this.props);
        return (
            <Fragment>
                <Container maxWidth="lg" className={classes.root} >
                        {/* {
                            productList.map((product)=>{
                            return (<CostomCard 
                                        product = {product} 
                                        key={product.id} 
                                        />)
                        })
                        } */}
                </Container>
            </Fragment>
        )
    }
}
//先定义 mapStateToProps 这个函数来指定如何把当前 Redux store state 映射到展示组件的 props 中
const mapStateToProps = state =>{
    return {
        productList:state.productList
    }
}
// mapDispatchToProps() 方法接收 dispatch() 方法并返回期望注入到展示组件的 props 中的回调方法。
const mapDispatchToProps = dispatch =>{
    return {
        reducerProductStore
    }
}
const HomeCartContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
export default withStyles(styles)(HomeCartContainer);
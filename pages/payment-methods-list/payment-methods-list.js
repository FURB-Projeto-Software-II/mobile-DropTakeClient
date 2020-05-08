import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux' 
import { StyleSheet } from 'react-native'
import { Layout, Button,ListItem, List, Divider } from '@ui-kitten/components'
import { Actions } from 'react-native-router-flux'

const data = new Array(15).fill({
    title: 'Item',
    description: 'Description for Item',
  });

class PaymentMethodsList extends Component {

    constructor(props){
        super(props)
    }

    renderItem = ({ item, index }) => (
        <ListItem
          title={`${item.title} ${index + 1}`}
          description={`${item.description} ${index + 1}`}
        />
    );

    render() {
        return (
           <Layout>
               <Layout style={styles.listPaymentMethodsBox}>
                    <List
                        style={styles.container}
                        data={data}
                        ItemSeparatorComponent={Divider}
                        renderItem={this.renderItem}
                    />
               </Layout>
               <Layout style={styles.newPaymentMethodBox}>
                    <Button style={styles.button}>
                        NOVO MÉTODO
                    </Button>
               </Layout>
           </Layout> 
        )
    }

}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => bindActionCreators({  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PaymentMethodsList)

const styles = StyleSheet.create({
    listPaymentMethodsBox: {
        height: '90%'
    },
    newPaymentMethodBox: {
        height: '10%'
    },
    button: {
        marginTop: 15,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
        backgroundColor: '#501380',
        borderColor: 'transparent'
    },
    container: {
        maxHeight: '100%',
    },
})
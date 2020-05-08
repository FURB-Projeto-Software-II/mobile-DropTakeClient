import React, { Component } from 'react'
import { Layout, Avatar, Text, Divider, Card, Button } from '@ui-kitten/components'
import { StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class StorageProfile extends Component {
    
    render() {
        return (
            <>
            <Layout style={styles.containerTop}>
                <Layout style={styles.avatarBox}>
                    <Avatar source={require('../../assets/avatar.png')} style={styles.avatar}/>
                    <Text style={styles.avatarName}>José Affonso</Text>
                </Layout>

                <Divider/>
                
                <Layout style={styles.rateBox}>
                    <Layout>
                        <Text style={styles.textRate}><FontAwesome name="star" size={20} color="black" /> Nota: <Text style={styles.numberRate}>4.8</Text></Text>
                    </Layout>
                    <Layout>
                        <Text style={styles.textRate}><FontAwesome5 name="running" size={20} color="black" /> Distância:  <Text style={styles.numberRate}>14km</Text></Text>
                    </Layout>
                </Layout>
                
                <Divider/>

                <Layout style={styles.infoBox}>
                    <Text style={styles.bold}>Cidade: <Text>Blumenau - SC</Text></Text>
                    <Text style={styles.bold}>Bairro: <Text>Velha</Text></Text>
                    <Text style={styles.bold}>Rua: <Text>Arthur Schreiber</Text></Text>
                    <Text style={styles.bold}>Dias para retirada: <Text>Seg - Sáb</Text></Text>
                    <Text style={styles.bold}>Horário para retirada: <Text>08:00 às 22:00</Text></Text>
                    <Text style={styles.bold}><FontAwesome5 name="car" size={15} color="black" /> Realiza entrega: <Text>SIM</Text></Text>
                </Layout>

                <Divider/>

                <Layout style={styles.avaliacaoBox}>
                    <Layout>
                        <Text category="label">Últimas Avaliações</Text>
                    </Layout>
                    <Layout>
                        <Card style={styles.avalicaoCard}>
                            <Text category="label">Bruno Vigentas</Text>
                            <Text style={styles.avaliacaoText}>Tudo conforme combinado, tirei a encomenda sem problemas.</Text>
                            <Text category="label">Nota: 5</Text>
                        </Card>
                    </Layout>
                </Layout>
            </Layout>
            <Layout style={styles.containerBottom}>
                <Button style={[styles.button]} size='giant'>
                    SELECIONAR
                </Button> 
            </Layout>
            </>
        )
    }
}

const mapStateToProps = state => ({
    
})

const mapDispatchToProps = dispatch => bindActionCreators({ }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(StorageProfile)

const styles = StyleSheet.create({
    containerTop: {
        height: '85%'
    },
    containerBottom: {
        height: '15%'
    },
    avatar: {
        height: 100,
        width: 100,
        alignItems: 'center',
    },
    avatarBox: {
        margin: 15,
        alignItems: 'center',
    },
    avatarName: {
        margin: 15,
        fontWeight: 'bold',
        fontSize: 20
    },
    rateBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 15
    },
    textRate: {
        fontWeight: 'bold',
        fontSize: 19
    },
    numberRate: {
        fontWeight: 'bold',
        fontSize: 19,
        color: '#A46BD0'
    },
    infoBox: {
        margin: 15
    },
    bold: {
        fontWeight: 'bold',
        paddingTop: 3,
        paddingBottom: 3
    },
    avaliacaoBox: {
        margin: 15
    },
    avalicaoCard: {
        marginTop: 15
    },
    avaliacaoText: {
        marginTop: 5,
        marginBottom: 5
    },
    button: {
        marginTop: 15,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
        backgroundColor: '#501380',
        borderColor: 'transparent'
    },
})
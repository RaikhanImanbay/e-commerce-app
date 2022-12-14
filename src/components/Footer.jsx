import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons';
import React from 'react';
import styled from "styled-components";
import { mobile } from '../responsive';

const Container = styled.div`
  padding-top: 20px;
  display: flex;
  ${mobile({ flexDirection: "column"})}
`
const Left = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  flex: 1;
`
const Logo = styled.h1`
`
const Description = styled.p`
  margin: 20px 0;
`
const SocialContainer = styled.div`
  display: flex;
`
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${props=>props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none"})}
`
const Title = styled.h3`
  margin-bottom: 30px;
`
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap
`
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fcf5f5"})}
`
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
`
const Payment = styled.img`
  width: 50%;
  cursor: pointer;
`

function Footer() {
  return (
    <Container>
      <Left>
        <Logo>ARRAY.</Logo>
        <Description>
          Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
        </Description>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
      <Title>
        Useful Links
      </Title>
      <List>
        <ListItem>Home</ListItem>
        <ListItem>Cart</ListItem>
        <ListItem>Man Fashion</ListItem>
        <ListItem>Woman Fashion</ListItem>
        <ListItem>Accessoriese</ListItem>
        <ListItem>My account</ListItem>
        <ListItem>Order Tracking</ListItem>
        <ListItem>Wishlist</ListItem>
        <ListItem>Terms</ListItem>
      </List>
      </Center>
      <Right>
        <Title>Contacts</Title>
        <ContactItem>
          <Room style={{marginRight: "10px"}}/>
          Akadeemia tee 6, Harjumaa, Tallinn
        </ContactItem>
        <ContactItem>
        <Phone  style={{marginRight: "10px"}}/>
          58350085
        </ContactItem>
        <ContactItem>
        <MailOutline  style={{marginRight: "10px"}}/>
          contact@array.dev
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  )
}

export default Footer
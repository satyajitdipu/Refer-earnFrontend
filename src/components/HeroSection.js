import React, { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  Button,
  Grid,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import { styled } from '@mui/material/styles';
import axios from 'axios';

const HeroContainer = styled(Container)(({ theme }) => ({
  backgroundColor: '#f5f5f5',
  padding: theme.spacing(8, 0, 6),
  textAlign: 'center',
}));

const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  marginBottom: theme.spacing(4),
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(2),
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(8),
  marginBottom: theme.spacing(4),
}));

const StepsContainer = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

const RecentReferralsContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(8),
  marginBottom: theme.spacing(8),
}));

const Footer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: theme.palette.grey[200],
  textAlign: 'center',
}));

const HeroSection = ({ onReferNowClick }) => {
  const [referrals, setReferrals] = useState([]);

  useEffect(() => {
    const fetchReferrals = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/referrals');
        // console.log(response.data);
        setReferrals(response.data);
      } catch (error) {
        console.error('Error fetching referrals:', error);
      }
    };
    fetchReferrals();
  }, []);

  return (
    <HeroContainer>
      <Title variant="h2">Let’s Learn & Earn</Title>
      <Subtitle variant="h5">Get a chance to win up to Rs. 15,000</Subtitle>
      <StyledButton variant="contained" color="primary" onClick={onReferNowClick}>
        Refer Now
      </StyledButton>
      <StepsContainer container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <SectionTitle variant="h6">How Do I Refer?</SectionTitle>
          <Typography>Submit referrals easily via our website’s referral section.</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SectionTitle variant="h6">What Are The Referral Benefits?</SectionTitle>
          <Typography>Earn rewards once your referral joins an Accredian program.</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SectionTitle variant="h6">Both parties receive a bonus 30 days after program enrollment.</SectionTitle>
        </Grid>
      </StepsContainer>
      <RecentReferralsContainer>
        <SectionTitle variant="h5">Recent Referrals</SectionTitle>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Your Name</TableCell>
                <TableCell>Your Email</TableCell>
                <TableCell>Friend's Name</TableCell>
                <TableCell>Friend's Email</TableCell>
                <TableCell>Course Name</TableCell>
                <TableCell>Message</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {referrals.map((referral) => (
                <TableRow key={referral.id}>
                  <TableCell>{referral.referrerName}</TableCell>
                  <TableCell>{referral.referrerEmail}</TableCell>
                  <TableCell>{referral.refereeName}</TableCell>
                  <TableCell>{referral.refereeEmail}</TableCell>
                  <TableCell>{referral.courseName}</TableCell>
                  <TableCell>{referral.message}</TableCell>


                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </RecentReferralsContainer>
      <Footer>
        <Typography variant="body1">© 2024 Refer & Earn. All rights reserved.</Typography>
        <Typography variant="body2">Contact us: support@referandearn.com</Typography>
      </Footer>
    </HeroContainer>
  );
};

export default HeroSection;

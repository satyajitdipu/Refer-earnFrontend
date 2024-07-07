import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import PropTypes from 'prop-types';

const ReferralModal = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({
    referrerName: '',
    referrerEmail: '',
    refereeName: '',
    refereeEmail: '',
    courseName: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/referrals', formData);
      console.log(response.data);
      handleClose();
    } catch (error) {
      console.error('Error submitting referral form:', error);
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <div style={{ padding: '20px', backgroundColor: 'white', margin: '20px auto', width: '50%' }}>
        <Typography variant="h6">Refer a Course</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            name="referrerName"
            label="Your Name"
            value={formData.referrerName}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            name="referrerEmail"
            label="Your Email"
            value={formData.referrerEmail}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            name="refereeName"
            label="Referee Name"
            value={formData.refereeName}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            name="refereeEmail"
            label="Referee Email"
            value={formData.refereeEmail}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            name="courseName"
            label="Course Name"
            value={formData.courseName}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            name="message"
            label="Message"
            value={formData.message}
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows={4}
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </div>
    </Modal>
  );
};

ReferralModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default ReferralModal;

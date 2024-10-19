import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  eventName: { type: String, required: true },
  eventDate: { type: Date, required: true },
  eventType: {
    type: String,
    required: true,
    enum: ['Birthday', 'Wedding', 'Corporate', 'Party'],
  },
  location: {
    type: String,
    required: true,
    enum: ['Gomti Nagar', 'Alambagh', 'Telibagh', 'Singar Nagar'],
  },
  venue: {
    type: String,
    required: true,
    trim: true,
  },
  description: { type: String, required: true },
});

export const Event = mongoose.model('Event', eventSchema);

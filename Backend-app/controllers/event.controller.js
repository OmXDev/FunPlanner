import {Event} from '../models/event.model.js';

export const createEvent = async (req, res) => {
  try {
    const { eventName, eventDate, eventType, location, venue, description } = req.body; // Ensure variable names match the input

    // Create a new event instance
    const newEvent = new Event({
      eventName,
      eventDate,
      eventType,
      location,
      venue,
      description,
    });

    // Save the event to the database
    await newEvent.save();

    // Send a success response
    res.status(201).json({
      success: true,
      message: 'Event created successfully!',
      event: newEvent,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Failed to create event',
      error: error.message,
    });
  }
};

export const getEvent = async (req, res) => {
  try {
    // Extract event ID from request parameters
    const { id } = req.params;

    // Find the event in the database by its ID
    const event = await Event.findById(id);

    // Check if the event exists
    if (!event) {
      return res.status(404).json({
        success: false,
        message: 'Event not found',
      });
    }

    // Send the event details as a response
    res.status(200).json({
      success: true,
      event, // return the event object
    });
  } catch (error) {
    console.error('Error fetching event:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch event data',
      error: error.message,
    });
  }
};
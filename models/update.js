const Lawyer = require('./profile'); // Import the Lawyer model

async function updateLawyerProfile(email, updatedProfileData) {
    try {
        // Find the lawyer by ID and update their profile with the provided data
        const updatedLawyer = await Lawyer.findByIdAndUpdate(email, updatedProfileData, { new: true });

        if (!updatedLawyer) {
            // If no lawyer is found with the provided ID, return null
            return null;
        }

        // Return the updated lawyer object
        return updatedLawyer;
    } catch (error) {
        // If an error occurs during the database operation, throw the error
        throw error;
    }
}

module.exports = updateLawyerProfile;

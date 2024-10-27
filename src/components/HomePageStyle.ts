const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column' as const,
        justifyContent: 'center',
        height: '100vh',
        padding: '0.5rem',
        backgroundColor: '#f0f0f0',
    },
    intro: {
        fontSize: '3rem',
        padding: '1.5rem',
        color: '#333',
    },
    title: {
        fontSize: '2rem',
        color: '#333'
    },
    about: {
        fontSize: '1.5rem',
        color: '#666',
    },
    skillsContainer: {
        display: 'flex',
        alignItems: 'center', // Ensures heading and list are vertically aligned
        marginTop: '10px',
    },
    skillList: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#333',
    },
    skillHeading: {
        fontWeight: 'bold',
        color: '#000',
        fontSize: '1.7rem',
        marginRight: '5px',  // Add space between the heading and the colon
    }

};
export default styles;
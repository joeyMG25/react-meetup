import { useHistory } from "react-router-dom";
import NewMeetUpForm from "../components/meetups/NewMeetUpForm";

function NewMeetupPage() {
  const history = useHistory();

  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-getting-started-49373-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-type": "application/json",
        },
      }
    ).then(() => {
      history.replace('/');
    });
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetUpForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;

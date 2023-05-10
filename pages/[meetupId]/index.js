import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return <MeetupDetail meetup={props.meetupData} />;
}

export async function getStaticProps(context) {
  //fetch a data for a single meetup
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
        id: meetupId,
        title: "First MeetUp",
        address: "Some Street 5, Some City",
        description: "This is a first meetup",
      },
    },
  };
}
export default MeetupDetails;

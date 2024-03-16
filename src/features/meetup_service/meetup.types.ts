export type MeetupCreateRequest = {
    name: string;
}

export type MeetupUpdateNameRequest = {
    name: string;
}


// export type MeetupUpdateCreditialsRequest = {
//     id: string;
// }


export type MeetupResponse = {
  id: string;
  name: string;
  organizer_id: string;
  client_id: string;
  client_secret: string;
};


// type MeetupUpdateNameResponse = {

// }


// type MeetupUpdateCreditialsResponse = {

// }




// type MeetupDeleteResponse = {

// }



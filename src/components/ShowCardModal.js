import React, { useEffect, useState, useRef } from "react";
import { useClickAway } from "use-click-away";
import { connect } from "react-redux";
import { TextArea, Segment, Grid, Header, Input } from "semantic-ui-react";
import "semantic-ui-css/semantic.css";
import { setCard } from "../store/cardsSlice";
import { updateChecklistItem } from "../store/checklistsSlice";
import ShowChecklists from "./ShowChecklists";

const ShowCardModal = ({ card, setCard, onUpdateCardModal }) => {
  const [cardDetails, setCardDetails] = useState(card);

  useEffect(() => {
    //    setChecklists(
    //      (prevChecklist) => {
    //        if (_.isEmpty(checklists)) {
    //          return prevChecklist;
    //        }
    //        //        } else if (!_.isEqual(prevChecklist, checklists)) {
    //        return checklists;
    //      },
    //      [checklists]
    //    );
  });

  const onChangeCardPropHandler = (event, prop) => {
    const newCard = { ...cardDetails, [prop]: event.target.value };
    setCardDetails(newCard);
    onUpdateCardModal(newCard);
  };

  console.count("ShowCardModal");
  return (
    <Grid columns="equal">
      <Grid.Row>
        <Header>
          <Input
            value={cardDetails.title}
            onChange={(evt) => onChangeCardPropHandler(evt, "title")}
          />
        </Header>
      </Grid.Row>
      <Grid.Row columns="equal" stretched>
        <Grid.Column floated="left" width={6} key={1}>
          <Segment>
            Description
            <h5>
              <TextArea
                rows={3}
                value={cardDetails.description}
                placeholder="Add a more detailed description..."
                onChange={(evt) => onChangeCardPropHandler(evt, "description")}
              />
              <ShowChecklists
                cardId={cardDetails._id}
                userId={cardDetails._fk_user}
              />
            </h5>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

// const ShowCardsList = ({
// cardDetails,
// selectedCardChecklists,
// updatetChecklistItem,
// }) => {
//   const [cardContent, setCardContent] = useState(cardDetails);
//   let renderedChecklists = null;
//   renderedChecklists = selectedCardChecklists(cardContent._id).map(
//     (checklist) => {
//       let renderedChecklistItems = null;
//       if (checklist.items) {
//         <ShowItemList itemList={checklist.items} />;
// }

//       return <div key={uniqid(checklist.title)}>{renderedChecklistItems}</div>;
//     }
//   );
//
//      <Card color="red" centered>
//        <Card.Content header={cardDetails.title} />
//        <Card.Content description={"Description: " + cardDetails.description} />
//        <Card.Content extra>
//
//        </Card.Content>
//      </Card>

// return (
//     <div>
//       <ShowCard card={card} />
//       <h3>
//         <Input transparent value={cardDetails.description} />
//       </h3>
//       <h4>Check Lists</h4>
//       {renderedChecklists}
//     </div>
//   );
// }; // End ShowCard

export default connect(null, {
  setCard,
})(ShowCardModal);

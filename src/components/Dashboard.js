import React, { useEffect, useReducer, useState } from "react";
import _ from "lodash";
import { Icon, Grid, Header, Card, Modal, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
const uniqid = require("uniqid");

import LoginPage from "./LoginPage";
import CardDetailsModal from "./CardDetailsModal";

import { connect, useSelector, useDispatch } from "react-redux";
import { selectIsUserLoggedIn } from "../store/userLoggedInSlice";
import { fetchLists } from "../store/listsSlice";
import { fetchCards } from "../store/cardsSlice";

const initialState = 0;
const reducerState = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "set":
      return action.count;
    default:
      throw new Error("Unexpected action");
  }
};

const Dashboard = ({
  idUser,
  selectedLists,
  selectedListCards,
  selectedCardCheckLists,
  selectCard,
  fetchLists,
  fetchCards,
  listCards,
}) => {
  const [openModal, setOpenModal] = useState({});
  const [open, setOpen] = useState(false);
  //  const [listsContent, setListContent] = useState(lists);
  const [cardContent, setCardContent] = useState({});

  useEffect(() => {
    fetchLists();
    fetchCards();
  });
  // const [state, dispatch1] = useReducer(reducerState, initialState);

  let isUserLoggedIn = useSelector(selectIsUserLoggedIn);

  //  const ShowCheckListtt = ({ checklistLists }) => {
  //    const renderChecklistItems = checklistLists.map((checklist) => {
  //      return (
  //        <div key={uniqid(checklist.title)}>
  //          <div>{checklist.title}</div>
  //          <CheckListItems checkListItems={checklist.items} />
  //        </div>
  //      );
  //    });
  //
  //    return (
  //      <div>
  //        {checklistLists.description}
  //        {renderChecklistItems}
  //      </div>
  //    );
  // };

  const ShowCardTitle = ({ title }) => {
    return <Card.Header>{title}</Card.Header>;
  };

  {
    /*

      <Card color="red" centered>
        <Card.Content>
          <Card.Header>{cardDetails.title} </Card.Header>
          <Card.Meta>Description: {cardDetails.description} </Card.Meta>
          <Card.Description>
            <h2>Checklists</h2>
            
          </Card.Description>
        </Card.Content>
      </Card>
        */
  }
  const ShowCard = () => {
    const cardDetails = cardContent;

    const renderedCheckLists = selectedCardCheckLists(cardDetails._id).map(
      (checkList) => {
        let renderedCheckListItems = null;
        if (checkList.items) {
          renderedCheckListItems = checkList.items.map((item) => {
            return (
              <div key={uniqid(item.name)}>
                {item.name}:{item.value}
              </div>
            );
          });
        }

        return (
          <div key={uniqid(checkList.title)}>
            <div>
              <h5>Title: {checkList.title}</h5>
            </div>
            {renderedCheckListItems}
          </div>
        );
      }
    );

    //      <Card color="red" centered>
    //        <Card.Content header={cardDetails.title} />
    //        <Card.Content description={"Description: " + cardDetails.description} />
    //        <Card.Content extra>
    //
    //        </Card.Content>
    //      </Card>

    return (
      <div>
        <h3>
          <b>Description</b>: {cardDetails.description}
        </h3>
        <h4>Check Lists</h4>
        {renderedCheckLists}
      </div>
    );
  }; // End ShowCard

  function openModalHandler(event) {
    const cardId = event.target.value;
    //setOpenModal({...openModal, [cardId]:true});
    setOpen(true);
    //setCardContent(selectCard(cardId));
  }
  function closeModalHandler(event) {
    const cardId= event.target.value;
    //setOpenModal({...openModal, [cardId]:false});
    setOpen(false);
    //setCardContent({});
  }

  const CardDetailsModal = ({ cardDetails }) => {
    console.log("CardDetailsModal-cardContent-", cardContent);
    console.log("CardDetailsModal-cardDetails-", cardDetails);
    return (
      <Grid.Column width={4}>
        <Modal
          onClose={(event) => closeModalHandler(event)}
          onOpen={(event) => openModalHandler(event)}
          open={open}
          size="large"
          as={ShowCard}
          trigger={
            <Button icon value={cardDetails._id}>
              <Icon name="expand arrows alternate" size="small" />
            </Button>
          }
        >

          <Modal.Header>{cardDetails.title}</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </Grid.Column>
    );
  };

  const ShowLists = ({ listsContent }) => {
    let renderedCards;
    return selectedLists.map((listItem) => {
      renderedCards = null;
      renderedCards = selectedListCards(listItem._id).map((cardDetails) => {
        return (
          <div key={uniqid(cardDetails._id)}>
            <div className="">{cardDetails.title}</div>
            <CardDetailsModal cardDetails={cardDetails} />
          </div>
        );
      });

      return (
        <div key={uniqid(listItem._id)}>
          <div className="ui card">
            <div className="content">
              <div className="ui header">{listItem.listname}</div>
            </div>
            <div>{renderedCards}</div>
          </div>
          <Card>
            <Card.Content></Card.Content>
            <Header>{listItem.listname}</Header>
            <div>{renderedCards}</div>
          </Card>
        </div>
      );
    });
  };

  const ShowBoardName = () => {
    return <div>boardName: Todos</div>;
    //<div>boardName: {boardName}</div>;
  };

  //if (isUserLoggedIn)
  return (
    <Grid>
      <div className="Dashboard">
        <ShowBoardName />
        <Grid.Column width={14}>
          <ShowLists listsContent={selectedLists} />
        </Grid.Column>
      </div>
    </Grid>
  );

  //  return (
  //      <LoginPage />
  //</div>
  //);
};

const mapStateToProps = (state, ownProps) => {
  return {
    selectedLists: state.lists,
    selectedListCards: function selectedListCards(listId) {
      return state.cards.filter((card) => card.fk_listid == listId);
    },
    selectedCardCheckLists: function selectedCardCheckLists(cardId) {
      return state.cardCheckLists.filter(
        (checkList) => checkList.fk_cardid == cardId
      );
    },
    selectCard: function selectCard(cardId) {
      const cardContent = state.cards.filter((card) => card._id == cardId);
      return cardContent[0];
    },
  };
};
export default connect(mapStateToProps, { fetchLists, fetchCards })(Dashboard);

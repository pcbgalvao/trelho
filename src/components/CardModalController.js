import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Icon, Grid, Modal, Input, Button } from "semantic-ui-react";

import ShowCardModal from "./ShowCardModal";
import { setCard, fetchCards } from "../store/cardsSlice";
//import { checklist } from "../store/selectedChecklistSlice";

const CardModalController = ({
  card,
  onUpdateCardModal,
}) => {
  const [openModalCard, setOpenModalCard] = useState(null);
  const [cardContent, setCardContent] = useState(null);

  useEffect((prev) => {
    setCardContent(card);
  }, [card]);

  const openModal = (event, data) => {
    const cardId = data;
    if (!openModalCard || openModalCard === 0) {
      setOpenModalCard(cardId);
    }
  };

  const closeModal = (event, data) => {    
    setOpenModalCard(0);
  };

  const onUnMountModal = (event) => {
    console.log("unMountModal-event", event);
  };
  console.log("CardModalController-cardContent-", cardContent);
  console.log("CardModalController-openModalCard-", openModalCard);

  return (
    <Grid.Column width={4}>
      <Modal
        closeIcon
        onClose={closeModal}
        onUnmount={onUnMountModal}
        onOpen={(event) => openModal(event, cardContent._id)}
        open={!!openModalCard}
        size="large"
        trigger={<Button icon="expand arrows alternate" />}
      >
        <Modal.Header>
          {/* <Input transparent value={cardContent.title} /> */}
        </Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <ShowCardModal
              card={cardContent }
              onUpdateCardModal={onUpdateCardModal}
            />
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions></Modal.Actions>
      </Modal>
    </Grid.Column>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    selectedCardChecklists: function selectedCardChecklists(cardId) {
      return state.cardChecklists.filter(
        (checklist) => checklist.fk_cardid == cardId
      );
    },
  };
};

export default connect(mapStateToProps, { setCard })(CardModalController);

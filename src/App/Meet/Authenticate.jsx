import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Container } from "reactstrap";

import { getUser } from "../module";

const Authenticate = ({ handleAuth }) => {
  const { token, webinar_id } = useParams();

  const { replace } = useHistory();

  useEffect(() => {
    getUser(token).then((user) => {
      handleAuth(user, token);
      replace(`/webinar/${webinar_id}`);
    });
  }, []);

  return <Container></Container>;
};

export default Authenticate;

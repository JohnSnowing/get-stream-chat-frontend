import React, { useState } from "react";
import { useChatContext } from "stream-chat-react";

import { UserList } from "./";
import { CloseCreateChannel } from "../assets";

const ChannelNameInput = ({ channelName = "", setChannelName }) => {
    const handleChange = (event) => {
        event.preventDefault();
        setChannelName(event.target.value);
    };

    return (
        <div className="channel-name-input__wrapper">
            <p>Name</p>
            <input
                type="text"
                value={channelName}
                onChange={handleChange}
                placeholder="channel-name"
            />
            <p>Add Members</p>
        </div>
    );
};

const EditChannel = () => {
    return <div>Edit Channel</div>;
};

export default EditChannel;

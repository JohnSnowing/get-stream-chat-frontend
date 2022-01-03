import React from "react";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";

import {
    ChannelListContainer,
    ChannelContainer,
    Auth,
} from "./components/index";
import "./App.css";

const cookies = new Cookies();

const apiKey = "mq79k6vvmxmg";

const client = StreamChat.getInstance(apiKey);
const authToken = cookies.get("token");

if (authToken) {
    client.connectUser(
        {
            id: cookies.get("userId"),
            name: cookies.get("username"),
            fullName: cookies.get("fullName"),
            phoneNumber: cookies.get("phoneNumber"),
            image: cookies.get("avatarURL"),
            hashedPassword: cookies.get("hashedPassword"),
        },
        authToken,
    );
}

const App = () => {
    if (!authToken) return <Auth />;

    return (
        <div className="app__wrapper">
            <Chat client={client} theme="team light">
                <ChannelListContainer></ChannelListContainer>
                <ChannelContainer></ChannelContainer>
            </Chat>
        </div>
    );
};

export default App;

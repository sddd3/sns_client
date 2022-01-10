import ChatPost from "../../components/pages/new/chat/ChatPost";
import ImagePost from "../../components/pages/new/image/ImagePost";
import LinkPost from "../../components/pages/new/link/LinkPost";
import MoviePost from "../../components/pages/new/movie/MoviePost";
import NewPost from "../../components/pages/new/NewPost";
import QuotePost from "../../components/pages/new/quote/QuotePost";
import TextPost from "../../components/pages/new/text/TextPost";
import VoicePost from "../../components/pages/new/voice/VoicePost";
import Page404 from "../../components/pages/common/Error/Page404";


const newPostRoute = [
    {
        path: '/',
        exact: true,
        children: <NewPost />
    },
    {
        path: '/chat',
        exact: true,
        children: <ChatPost />
    },
    {
        path: '/image',
        exact: true,
        children: <ImagePost />
    },
    {
        path: '/link',
        exact: true,
        children: <LinkPost />
    },
    {
        path: '/movie',
        exact: true,
        children: <MoviePost />
    },
    {
        path: '/quote',
        exact: true,
        children: <QuotePost />
    },
    {
        path: '/text',
        exact: true,
        children: <TextPost />
    },
    {
        path: '/voice',
        exact: true,
        children: <VoicePost />
    },
    {
        path: '*',
        exact: false,
        children: <Page404 />
    }
];

export default newPostRoute;
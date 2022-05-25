import { useParams } from "react-router-dom";
import { Route } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
    { id: 'q1', author: 'Max', text: 'Learning React is fun!' },
    { id: 'q2', author: 'Maximilian', text: 'Learning React is great!' },
];

const QuoteDetail = () => {
    const params = useParams();
    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

    if (!quote) {
        return <p>No quote fined</p>
    }

    return (
        <div>
            <HighlightedQuote
                text={quote.text}
                author={quote.author}
            />
            <div>{params.quoteId}</div>
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments />
            </Route>
        </div>
    )
}

export default QuoteDetail;
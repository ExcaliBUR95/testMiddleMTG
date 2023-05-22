import React, { Component } from "react";
import { connect } from "react-redux";
import { AppDispatch, RootState } from "../app/store";
import { getReviews } from "../app/features/reviewsActions";

interface Review {
  id: number;
  name: string;
  review: string;
  date: string;
}

interface ReviewListProps {
  language?: string;
  reviews: Review[];
  getReviews: (locale: string) => void; // Добавлен аргумент locale
  locale?: string | undefined;
}

interface ReviewListState {
  currentPage: number;
}

class ReviewList extends Component<ReviewListProps, ReviewListState> {
  state: ReviewListState = {
    currentPage: 1,
  };

  componentDidMount() {
    const { getReviews, locale } = this.props;  
    getReviews(locale || "ru");  
  }

  componentDidUpdate(prevProps: ReviewListProps) {
    const { getReviews, locale } = this.props;
    if (locale !== prevProps.locale) {
      getReviews(locale || "ru");
    }
  }

  handleClick = (pageNumber: number) => {
    this.setState({ currentPage: pageNumber });
  };

  render() {
    const { reviews } = this.props;
    const { currentPage } = this.state;

    if (!reviews) {
      return "...loading sir";
    }

    // Пагинация
    const reviewsPerPage = 10;
    const indexOfLastReview = currentPage * reviewsPerPage;
    const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
    const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

    const totalPages = Math.ceil(reviews.length / reviewsPerPage);
    const pageNumbers = Array.from(
      { length: totalPages },
      (_, index) => index + 1
    );

    return (
      <div className="acc">
        <div className="logo_reviews">
          <img
            src="https://cdn1.ozone.ru/s3/multimedia-r/6534856131.jpg"
            alt="Logo"
          />
          <div className="review-list">
            <div className="reviews">
              {currentReviews.map((review: Review) => (
                <div className="review" key={review.id}>
                  <div>{review.name}</div>
                  <div>{review.review}</div>
                  <div>{review.date}</div>
                </div>
              ))}
            </div>
            {/* Пагинация */}
            <div className="pagination">
              {pageNumbers.map((pageNumber) => (
                <button
                  key={pageNumber}
                  className={currentPage === pageNumber ? "active" : ""}
                  onClick={() => this.handleClick(pageNumber)}
                >
                  {pageNumber}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  const reviewsArray = Object.keys(state.reviews.reviews).map(
    (key) => state.reviews.reviews[key]
  );

  return {
    reviews: reviewsArray,
  };
};

const mapDispatchToProps = (
  dispatch: AppDispatch,
  ownProps: ReviewListProps
) => {
  return {
    getReviews: (locale: string) => dispatch(getReviews(locale || "ru")), 
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewList);

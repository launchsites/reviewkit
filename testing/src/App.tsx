import ReviewCard from "../../src/components/review-card.tsx";
import ReviewCarousel from "../../src/components/review-carousel.tsx";
import ReviewGrid from "../../src/components/review-grid.tsx";
import type {review} from "../../src/data/types.ts"


function App() {

  const reviewList: review[] = [
  //   id: number;
    //     author: string;
    //     text: string;
    //     rating: number;
    //     pfp?: string;
    {id: 0, author: "Jamie", text: "good place", rating: 3},
    {id: 0, author: "Jamie", text: "good place", rating: 3}
  ]


  return (
    <>
      <ReviewCard{... reviewList}></ReviewCard>
      <ReviewCarousel{...reviewList}></ReviewCarousel>
      <ReviewGrid{...reviewList}></ReviewGrid>
    </>
  )
}

export default App

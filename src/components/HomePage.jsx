import React, { useEffect, useRef } from "react";
import "./HomePage.css";

export default function HomePage() {
  const quesRef = useRef([]);
  const pRef = useRef([]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.9 }
    );

    quesRef.current.forEach((ques) => observer.observe(ques));
    pRef.current.forEach((p) => observer.observe(p));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="homepage-main">
      <div className="page-1 page">
        <div className="homepage-bg"></div>
        <div className="scramble-container">
          <div className="scramble-text">Sorting Visualizer</div>
        </div>
      </div>
      <div className="page-2 page">
        <div className="box left">
          <div className="ques-ans">
            {/* Ques-1 */}
            <section className="ques" ref={(el) => (quesRef.current[0] = el)}>
              What is Sorting?
            </section>
            <section className="ans">
              <p ref={(el) => (pRef.current[0] = el)}>
                <strong>Sorting</strong> refers to arranging elements in a
                particular order, either <em>ascending or descending</em> based
                on some criteria.
              </p>
            </section>
            {/* Ques-2 */}
            <section className="ques" ref={(el) => (quesRef.current[1] = el)}>
              Why Sorting?
            </section>
            <section className="ans">
              <p ref={(el) => (pRef.current[1] = el)}>
                Sorting elements is a fundamental operation in computer science
                and data processing for several reasons:
              </p>

              <p ref={(el) => (pRef.current[2] = el)}>
                1. <strong>Organization</strong>: Sorting allows us to arrange
                elements in a specific order, such as ascending or descending.
              </p>

              <p ref={(el) => (pRef.current[3] = el)}>
                2. <strong>Searching</strong>: Sorted data can be searched more
                quickly and effectively.
              </p>

              <p ref={(el) => (pRef.current[4] = el)}>
                3. <strong>Data Analysis</strong>: Sorting is often a
                prerequisite for performing various data analysis tasks.
              </p>

              <p ref={(el) => (pRef.current[5] = el)}>
                4. <strong>Data Presentation</strong>: Sorted data is easier to
                comprehend and present.
              </p>

              <p ref={(el) => (pRef.current[6] = el)}>
                5. <strong>Data Deduplication</strong>: Sorting can help
                identify and remove duplicate elements from a dataset.{" "}
              </p>

              <p ref={(el) => (pRef.current[7] = el)}>
                6. <strong>Algorithm Design</strong>: Sorting is a crucial
                building block for developing more complex algorithms. Many
                advanced algorithms and structures heavily rely on sorting
                operations as part of their implementation or optimization
                steps.
              </p>
            </section>
          </div>
        </div>
        <div className="box right">
          <div className="sort-types-heading">Types Of Sorting</div>
          <div className="sort-types">
            <div className="sort-types-container">
              <div className="sort-row infinite-scroll">
                <div className="sort-type">Bubble</div>
                <div className="sort-type">Selection</div>
                <div className="sort-type">Insertion</div>
              </div>
              <div className="sort-row infinite-scroll">
                <div className="sort-type">Merge</div>
                <div className="sort-type">Quick</div>
                <div className="sort-type">Heap</div>
              </div>
              <div className="sort-row infinite-scroll">
                <div className="sort-type">Radix</div>
                <div className="sort-type">Counting</div>
                <div className="sort-type">Bucket</div>
              </div>
              <div className="sort-row infinite-scroll">
                <div className="sort-type">Shell</div>
                <div className="sort-type">Cocktail Shaker</div>
                <div className="sort-type">Comb</div>
              </div>
              <div className="sort-row infinite-scroll">
                <div className="sort-type">Gnome</div>
                <div className="sort-type">Cycle</div>
                <div className="sort-type">Odd-Even</div>
              </div>
              <div className="sort-row infinite-scroll">
                <div className="sort-type">Pancake</div>
                <div className="sort-type">Stooge</div>
                <div className="sort-type">Tree</div>
              </div>
              <div className="sort-row infinite-scroll">
                <div className="sort-type">Bubble</div>
                <div className="sort-type">Selection</div>
                <div className="sort-type">Insertion</div>
              </div>
              <div className="sort-row infinite-scroll">
                <div className="sort-type">Merge</div>
                <div className="sort-type">Quick</div>
                <div className="sort-type">Heap</div>
              </div>
              <div className="sort-row infinite-scroll">
                <div className="sort-type">Radix</div>
                <div className="sort-type">Counting</div>
                <div className="sort-type">Bucket</div>
              </div>
              <div className="sort-row infinite-scroll">
                <div className="sort-type">Shell</div>
                <div className="sort-type">Cocktail Shaker</div>
                <div className="sort-type">Comb</div>
              </div>
              <div className="sort-row infinite-scroll">
                <div className="sort-type">Gnome</div>
                <div className="sort-type">Cycle</div>
                <div className="sort-type">Odd-Even</div>
              </div>
              <div className="sort-row infinite-scroll">
                <div className="sort-type">Pancake</div>
                <div className="sort-type">Stooge</div>
                <div className="sort-type">Tree</div>
              </div>
              <div className="sort-row infinite-scroll">
                <div className="sort-type">Pancake</div>
                <div className="sort-type">Stooge</div>
                <div className="sort-type">Tree</div>
              </div> 
            </div> 
          </div>
          <div className="time-complexity">
          <section className="ques" ref={(el) => (quesRef.current[2] = el)}>
              What is Time Complexity?
            </section>
            <section className="ans">
              <p ref={(el) => (pRef.current[8] = el)}>
              Time complexity is a measure of the amount of time taken by an algorithm to run as a function of the input size. It describes the relationship between the input size and the time taken to execute an algorithm, providing an estimate of the algorithm's efficiency.
              </p>
            </section>

          </div>
        </div>
      </div>
      <div className="page-3 page">
        ~ Shubham Mehta 
      </div>
    </div>
  );
}

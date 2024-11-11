import Grid from "@mui/material/Grid";
import "./App.css";
import { NewEntry } from "./views/new-entry";
import { Entries } from "./views/entries";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Entry } from "./views/entry";

function App() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h1>Memorize it!</h1>
        </Grid>
        <Router>
          <Grid item xs={12}>
            <Grid container direction="row" justifyContent="space-around">
              <Link
                to="new-entry"
                className="link"
                style={{ textDecoration: "none" }}
              >
                <h2
                  style={{
                    backgroundColor: "powderblue",
                    borderRadius: "1rem",
                    padding: "1rem",
                  }}
                >
                  Create a new entry
                </h2>
              </Link>
              <Link to="entries" className="link">
                <h2
                  style={{
                    backgroundColor: "powderblue",
                    borderRadius: "1rem",
                    padding: "1rem",
                  }}
                >
                  View entries
                </h2>
              </Link>
            </Grid>
          </Grid>
          <Routes>
            <Route path="new-entry" element={<NewEntry />} />
            <Route path="entries" element={<Entries />} />
            <Route path="entry/:id" element={<Entry />} />
          </Routes>
        </Router>
      </Grid>
    </>
  );
}

export default App;

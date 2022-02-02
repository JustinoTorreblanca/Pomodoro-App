import { fireEvent, render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import Pomodoro from "./components/Pomodoro";
import { AuthContext } from "./contexts/AuthContext";
import { createMemoryHistory } from "history";

describe("<Pomodoro />", () => {
  const history = createMemoryHistory();
  const mockLogout = jest.fn();
  const renderPomodoro = () =>
    render(
      <AuthContext.Provider value={{ logout: mockLogout }}>
        <Router navigator={history} location={history.location}>
          <Pomodoro />
        </Router>
      </AuthContext.Provider>
    );
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });
  test("should show the title", () => {
    renderPomodoro();
    const title = screen.getByText(/Pomodoro App/i);
    expect(title).toBeInTheDocument();
  });
  test("should show the number of the first phase of Pomodoro", () => {
    renderPomodoro();
    const minutes = screen.getByText(/25/i);
    expect(minutes).toBeInTheDocument();
  });
  test("should be active on Pomodoro on the first pass", () => {
    renderPomodoro();
    const activeElement = screen.getByTestId("pomodoro");
    expect(activeElement).toHaveClass("active");
  });
  test("should logout when clicking on Logout Button", () => {
    renderPomodoro();
    const logoutButton = screen.getByText(/Log out/i);
    fireEvent.click(logoutButton);
    expect(mockLogout).toHaveBeenCalled();
  });
});

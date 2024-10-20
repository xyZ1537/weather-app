import React from 'react'; 
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import SearchBar from '../src/components/SearchBar';

const mockOnSearch = vi.fn();

describe('SearchBar', () => {
  beforeEach(() => {
    mockOnSearch.mockClear();
  });

  it('should render search bar', () => {
    render(<SearchBar onSearch={mockOnSearch} />);

    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("placeholder", "Search for a city");

    const button = screen.getByRole("button", { name: /search/i });
    expect(button).toBeInTheDocument();
    expect(button).toBeEnabled();
  })

  it('should display error message when trying to submit empty value', async () => {
    render(<SearchBar onSearch={mockOnSearch} />);
  
    const button = screen.getByRole("button", { name: /search/i });
    const user = userEvent.setup();
    await user.click(button);
  
    expect(mockOnSearch).not.toHaveBeenCalled();
    expect(screen.getByText("Please enter a city name.")).toBeInTheDocument();
  })

  it('should call onSearch when submit valid input using button', async () => {
    render(<SearchBar onSearch={mockOnSearch} />);
    
    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button", { name: /search/i });
    const user = userEvent.setup();
    await user.type(input, "London");
    await user.click(button);
  
    expect(mockOnSearch).toHaveBeenCalledTimes(1);
    expect(mockOnSearch).toHaveBeenCalledWith("London");
    expect(screen.queryByText("Please enter a city name.")).not.toBeInTheDocument();
  })

  it('should call onSearch when submit valid input using enter key', async () => {
    render(<SearchBar onSearch={mockOnSearch} />);
    
    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button", { name: /search/i });
    const user = userEvent.setup();
    await user.type(input, "London{enter}");
  
    expect(mockOnSearch).toHaveBeenCalledTimes(1);
    expect(mockOnSearch).toHaveBeenCalledWith("London");
    expect(screen.queryByText("Please enter a city name.")).not.toBeInTheDocument();
  })
})


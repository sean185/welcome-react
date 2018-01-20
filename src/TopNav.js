import React, { Component } from 'react';
import { Jumbotron, Button, Nav, NavItem, Navbar, NavDropdown, MenuItem } from 'react-bootstrap';
import { Menu } from 'semantic-ui-react'

class TopNav extends Component {
	state = {}

	handleItemClick = (e, { name }) => this.setState({ activeItem: name })

	render() {
		const { activeItem } = this.state
		return (
		<div id="topnav">
			<Menu>
				<Menu.Item
				name='editorials'
				active={activeItem === 'editorials'}
				onClick={this.handleItemClick}
				>
				Editorials
				</Menu.Item>

				<Menu.Item
				name='reviews'
				active={activeItem === 'reviews'}
				onClick={this.handleItemClick}
				>
				Reviews
				</Menu.Item>

				<Menu.Item
				name='upcomingEvents'
				active={activeItem === 'upcomingEvents'}
				onClick={this.handleItemClick}
				>
				Upcoming Events
				</Menu.Item>
			</Menu>
			<Navbar inverse collapseOnSelect>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="#brand">React-Bootstrap</a>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav>
						<NavItem eventKey={1} href="#">
							Link
				</NavItem>
						<NavItem eventKey={2} href="#">
							Link
				</NavItem>
						<NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
							<MenuItem eventKey={3.1}>Action</MenuItem>
							<MenuItem eventKey={3.2}>Another action</MenuItem>
							<MenuItem eventKey={3.3}>Something else here</MenuItem>
							<MenuItem divider />
							<MenuItem eventKey={3.3}>Separated link</MenuItem>
						</NavDropdown>
					</Nav>
					<Nav pullRight>
						<NavItem eventKey={1} href="#">
							Link Right
				</NavItem>
						<NavItem eventKey={2} href="#">
							Link Right
				</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
		);
	}
}

const footerInstance = (
	<Jumbotron>
		<h1>Footer!</h1>
		<p>
			This is where the footer will be
	</p>

		<Nav bsStyle="pills" stacked activeKey={1}>
			<NavItem eventKey={1} href="/home">
				NavItem 1 content
	  </NavItem>
			<NavItem eventKey={2} title="Item">
				NavItem 2 content
	  </NavItem>
			<NavItem eventKey={3} disabled>
				NavItem 3 content
	  </NavItem>
		</Nav>

		<p>
			<Button bsStyle="primary">Learn more</Button>
		</p>
	</Jumbotron>
);

class Footer extends Component {
	render() {
		return footerInstance;
	}
}

export { TopNav, Footer };

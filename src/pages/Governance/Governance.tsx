import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItems from "../../contents/ListItems";
import List from "@material-ui/core/List";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: "40px 70px 0 70px",
      backgroundImage: "linear-gradient(to right, #ECF8FF, #FFF6F8)",
      //   backgroundImage: "linear-gradient(to left, #,#FFFFFF)"
      textAlign: "left",
    },
    heading: {
      fontFamily: "Space Grotesk",
      fontSize: "48px",
      fontsSyle: "normal",
      fontWeight: 700,
      margin: "20px",
      letterSpacing: "-1px",
      textAlign: "left",
      color: "#0E47EF",
    },
    subHeading: {
      color: "#0E47EF",
      fontFamily: "Space Grotesk",
      textAlign: "left",
      fontSize: "24px",
      fontWeight: 700,
      lineHeight: "70px",
      letterSpacing: "0px",
    },
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
    },
    lists: {
      color: "#0E47EF",
    },
    textStyle: {
      color: "#000000",
    },
    subTextStyle1: {},
    subTextStyle2: {},
    listItemLineHeight: {
      lineHeight: "2",
    },
  })
);

function ListItemLink(props: ListItemProps<"a", { button?: true }>) {
  return <ListItem button component="a" {...props} />;
}
function Governance() {
  const classes = useStyles();
  console.log(ListItems);
  return (
    <div className={classes.root}>
      <Typography className={classes.heading} variant="h1" component="h2">
        Governance
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={3} className={classes.lists}>
          {ListItems.map((list) => (
            <ListItemLink key={list.index} href={list.url}>
              <ListItemText primary={list.name} />
            </ListItemLink>
          ))}
        </Grid>
        <Grid item xs={9}>
          <Grid item>
            <Typography
              id="overview"
              className={classes.subHeading}
              variant="h4"
              component="h4"
            >
              Overview
            </Typography>
          </Grid>

          {/* code */}
          <Grid item>
            <Typography
              id="code"
              className={classes.subHeading}
              variant="h4"
              component="h4"
            >
              Code
            </Typography>
            <p className={classes.textStyle}>[Governance GitHub Link]</p>
          </Grid>

          {/* deployed contracts */}
          <Grid item>
            <Typography
              id="deployedContracts"
              className={classes.subHeading}
              variant="h4"
              component="h4"
            >
              Deployed Contracts
            </Typography>
            <p className={classes.textStyle}></p>
          </Grid>

          {/* process*/}
          <Grid item>
            <Typography
              id="process"
              className={classes.subHeading}
              variant="h4"
              component="h4"
            >
              Process
            </Typography>
            <p className={classes.textStyle}>
              [refer to https://uniswap.org/docs/v2/governance/process/]
            </p>
          </Grid>

          <Grid item>
            <Typography
              id="glossary"
              className={classes.subHeading}
              variant="h4"
              component="h4"
            >
              Glossary
            </Typography>
            <p className={classes.textStyle}>
              <strong>BIT</strong>: An ERC-20 token that designates the weight
              of a user’s voting rights. The more BIT a user has in their
              wallet, the more weight their delegation or vote on a proposal
              holds.
            </p>
            <p className={classes.textStyle}>
              <strong>Delegation</strong>: BIT holders cannot vote or create
              proposals until they delegate their voting rights to an address.
              Delegation can be given to one address at a time, including the
              holder’s own address. Note that delegation does not lock tokens;
              it simply adds votes to the chosen delegation address.
            </p>

            <p className={classes.textStyle}>
              <strong>Proposal</strong>: A proposal is executable code that
              modifies the governance contract or treasury and how they work. In
              order to create a proposal, a user must have at least 1% of all
              BIT delegated to their address. Proposals are stored in the
              ”proposals” mapping of the Governor smart contract. All proposals
              are subject to a 7-day voting period. If the proposer does not
              maintain their vote weight balance throughout the voting period,
              the proposal may be canceled by anyone.
            </p>

            <p className={classes.textStyle}>
              <strong>Quorum</strong>: In order for a vote to pass, it must
              achieve quorum of 3% of all BIT voting in the affirmative. The
              purpose of the quorum is to ensure that the only measures that
              pass have adequate voter participation.
            </p>

            <p className={classes.textStyle}>
              <strong>Voting</strong>:Users can vote for or against single
              proposals once they have voting rights delegated to their address.
              Votes can be cast while a proposal is in the ”Active” state. Votes
              can be submitted immediately using ”castVote” or submitted later
              with ”castVoteBySig” (For more info on castVoteBySig and offline
              signatures, see EIP-712). If the majority of votes (and a 3%
              quorum of BIT) vote for a proposal, the proposal may be queued in
              the Timelock.
            </p>

            <p className={classes.textStyle}>
              <strong>Voting Period</strong>: Once a proposal has been put
              forward, BitDAO community members will have a seven day period
              (the Voting Period) to cast their votes. Timelock: All governance
              and other administrative actions are required to sit in the
              Timelock for a minimum of 2 days, after which they can be
              implemented
            </p>
          </Grid>

          {/* governance reference */}
          <Grid item>
            <Typography
              id="governanceReference"
              className={classes.subHeading}
              variant="h4"
              component="h4"
            >
              Governance Reference
            </Typography>
            <p className={classes.textStyle}>
              The BitDAO is governed and upgraded by BIT token-holders, using
              three distinct components; the BIT token, governance module (a
              fork of Compound Governor Bravo), and Timelock. Together, these
              contracts allow the community to propose, vote, and implement
              changes to the BitDAO protocol.
            </p>
            <p className={classes.textStyle}>
              Any address with more than 100,000,000 BIT delegated to it may
              propose governance actions, which are executable code. When a
              proposal is created, the community can submit their votes during a
              3 day voting period. If a majority, and at least 300,000,000 votes
              are cast for the proposal, it is queued in the Timelock, and can
              be implemented after 2 days. The proposal minimum delegate amount,
              the voting delay, and voting period can be changed through
              governance.
            </p>

            {/* diagram */}
            <p style={{marginTop:'50px'}}>
                <img src="/diagram.png"/>
            </p>
          </Grid>

          {/* bit */}

          <Grid item>
            <Typography
              id="bit"
              className={classes.subHeading}
              variant="h4"
              component="h4"
            >
              BIT
            </Typography>
            <p className={classes.textStyle}>
              {" "}
              BIT is an ERC-20 token that allows the owner to delegate voting
              rights to any address, including their own address. Changes to the
              owner’s token balance automatically adjust the voting rights of
              the delegate.
            </p>
          </Grid>

          {/* delegate */}

          <Grid item>
            <Typography
              id="delegate"
              className={classes.subHeading}
              variant="h4"
              component="h4"
            >
              Delegate
            </Typography>
            <p className={classes.textStyle}>
              {" "}
              Delegate votes from the sender to the delegatee. Users can
              delegate to 1 address at a time, and the number of votes added to
              the delegatee’s vote count is equivalent to the balance of BIT in
              the user’s account. Votes are delegated from the current block and
              onward, until the sender delegates again, or transfers their BIT .
            </p>
            <p className={classes.textStyle}>
              <span className={classes.subTextStyle1}>
                function <span className={classes.subTextStyle2}></span>delegate{" "}
              </span>
              (address delegatee)
              <ul style={{ paddingLeft: "20px" }}>
                <li className={classes.listItemLineHeight}>
                  delegatee: The address in which the sender wishes to delegate
                  their votes to.
                </li>
                <li className={classes.listItemLineHeight}>
                  msg.sender: The address of the BIT token holder that is
                  attempting to delegate their votes.
                </li>
                <li className={classes.listItemLineHeight}>
                  RETURN: No return, reverts on error.
                </li>
              </ul>
            </p>
          </Grid>

          {/* delegate by signature */}
          <Grid item>
            <Typography
              id="delegateBySignature"
              className={classes.subHeading}
              variant="h4"
              component="h4"
            >
              Delegate By Signature
            </Typography>
            <p className={classes.textStyle}>
              {" "}
              Delegate votes from the signatory to the delegatee. This method
              has the same purpose as Delegate but it instead enables offline
              signatures to participate in Compound governance vote delegation.
              For more details on how to create an offline signature.
            </p>
            <p className={classes.textStyle}>
              <span className={classes.subTextStyle1}>
                function <span className={classes.subTextStyle2}></span>
                delegateBySig{" "}
              </span>
              (address delegatee, uint nonce, uint expiry, uint8 v, bytes32 r,
              bytes32 s)
              <ul style={{ paddingLeft: "20px" }}>
                <li className={classes.listItemLineHeight}>
                  <strong>delegatee</strong>: The address in which the sender
                  wishes to delegate their votes to.
                </li>
                <li className={classes.listItemLineHeight}>
                  <strong>nonce</strong>: The contract state required to match
                  the signature. This can be retrieved from the contract’s
                  public nonces mapping.ress of the BIT token holder that is
                  attempting to delegate their votes.
                </li>
                <li className={classes.listItemLineHeight}>
                  <strong>expiry</strong>: The time at which to expire the
                  signature. A block timestamp as seconds since the unix epoch
                  (uint).{" "}
                </li>
                <li className={classes.listItemLineHeight}>
                  <strong>v</strong>: The recovery byte of the signature.
                </li>
                <li className={classes.listItemLineHeight}>
                  <strong>r</strong>: Half of the ECDSA signature pair.
                </li>
                <li className={classes.listItemLineHeight}>
                  <strong>s</strong>: Half of the ECDSA signature pair.
                </li>
                <li className={classes.listItemLineHeight}>
                  <strong>RETURN</strong>: No return, reverts on error.
                </li>
              </ul>
            </p>
          </Grid>

          {/* get current votes */}
          <Grid item>
            <Typography
              id="getCurrentVotes"
              className={classes.subHeading}
              variant="h4"
              component="h4"
            >
              Get Current Votes
            </Typography>
            <p className={classes.textStyle}>
              {" "}
              Gets the balance of votes for an account as of the current block.
            </p>
            <p className={classes.textStyle}>
              <span className={classes.subTextStyle1}>
                function <span className={classes.subTextStyle2}></span>
                getCurrentVotes{" "}
              </span>
              (address account) returns (uint96)
              <ul style={{ paddingLeft: "20px" }}>
                <li className={classes.listItemLineHeight}>
                  <strong>account</strong>: Address of the account in which to
                  retrieve the number of votes.
                </li>
                <li className={classes.listItemLineHeight}>
                  <strong>RETURN</strong>: The number of votes (integer).
                </li>
              </ul>
            </p>
          </Grid>

          {/* get prior votes */}
          <Grid item>
            <Typography
              id="getPriorVotes"
              className={classes.subHeading}
              variant="h4"
              component="h4"
            >
              Get Prior Votes
            </Typography>
            <p className={classes.textStyle}>
              {" "}
              Gets the prior number of votes for an account at a specific block
              number. The block number passed must be a finalized block or the
              function will revert.
            </p>
            <p className={classes.textStyle}>
              <span className={classes.subTextStyle1}>
                function <span className={classes.subTextStyle2}></span>
                getPriorVotes{" "}
              </span>
              (address account, uint blockNumber) returns (uint96)
              <ul style={{ paddingLeft: "20px" }}>
                <li className={classes.listItemLineHeight}>
                  <strong>account</strong>: Address of the account in which to
                  retrieve the prior number of votes.
                </li>
                <li className={classes.listItemLineHeight}>
                  <strong>blockNumber</strong>: The block number at which to
                  retrieve the prior number of votes.
                </li>
                <li className={classes.listItemLineHeight}>
                  <strong>RETURN</strong>: The number of prior votes.
                </li>
              </ul>
            </p>
          </Grid>

          {/* key events */}
          <Grid item>
            <Typography
              id="keyEvents"
              className={classes.subHeading}
              variant="h4"
              component="h4"
            >
              Key Events
            </Typography>
            <p style={{marginTop:'50px'}}>
                <img src="/keyevents.png"/>
            </p>
          </Grid>
          {/* governor bravo */}
          <Grid item>
            <Typography
              id="governorBravo"
              className={classes.subHeading}
              variant="h4"
              component="h4"
            >
              Governor Bravo
            </Typography>
          </Grid>

          {/* quorum votes */}
          <Grid item>
            <Typography
              id="quorumVotes"
              className={classes.subHeading}
              variant="h4"
              component="h4"
            >
              Quorum Votes
            </Typography>
            <p className={classes.textStyle}>
              {" "}
              The required minimum number of votes in support of a proposal for
              it to succeed.
            </p>
            <p className={classes.textStyle}>
              <span className={classes.subTextStyle1}>
                function <span className={classes.subTextStyle2}></span>
                quorumVotes{" "}
              </span>
              ( ) public pure returns (uint)
              <ul style={{ paddingLeft: "20px" }}>
                <li className={classes.listItemLineHeight}>
                  <strong>RETURN</strong>: The minimum number of votes required
                  for a proposal to succeed.
                </li>
              </ul>
            </p>
          </Grid>
          {/* proposal threshold */}
          <Grid item>
            <Typography
              id="proposalThreshold"
              className={classes.subHeading}
              variant="h4"
              component="h4"
            >
              Proposal Threshold
            </Typography>
            <p className={classes.textStyle}>
              {" "}
              The minimum number of votes required for an account to create a
              proposal. This can be changed through governance.
            </p>
            <p className={classes.textStyle}>
              <span className={classes.subTextStyle1}>
                function <span className={classes.subTextStyle2}></span>
                proposalThreshold{" "}
              </span>
              ( ) returns (uint)
              <ul style={{ paddingLeft: "20px" }}>
                <li className={classes.listItemLineHeight}>
                  <strong>RETURN</strong>: The minimum number of votes required
                  for an account to create a proposal.
                </li>
              </ul>
            </p>
          </Grid>

          {/* proposal max operations */}
          <Grid item>
            <Typography
              id="proposalMaxOperations"
              className={classes.subHeading}
              variant="h4"
              component="h4"
            >
              Proposal Max Operations
            </Typography>
            <p className={classes.textStyle}>
              {" "}
              The maximum number of actions that can be included in a proposal.
              Actions are functions calls that will be made when a proposal
              succeeds and executes.
            </p>
            <p className={classes.textStyle}>
              <span className={classes.subTextStyle1}>
                function <span className={classes.subTextStyle2}></span>
                proposalMaxOperations{" "}
              </span>
              ( ) returns (uint)
              <ul style={{ paddingLeft: "20px" }}>
                <li className={classes.listItemLineHeight}>
                  <strong>RETURN</strong>: The maximum number of actions that
                  can be included in a proposal.
                </li>
              </ul>
            </p>
          </Grid>

          {/* voting delay */}
          <Grid item>
            <Typography
              id="votingDelay"
              className={classes.subHeading}
              variant="h4"
              component="h4"
            >
              Voting Delay
            </Typography>
            <p className={classes.textStyle}>
              {" "}
              The number of Ethereum blocks to wait before voting on a proposal
              may begin. This value is added to the current block number when a
              proposal is created. This can be changed through governance.
            </p>
            <p className={classes.textStyle}>
              <span className={classes.subTextStyle1}>
                function <span className={classes.subTextStyle2}></span>
                votingDelay{" "}
              </span>
              ( ) returns (uint)
              <ul style={{ paddingLeft: "20px" }}>
                <li className={classes.listItemLineHeight}>
                  <strong>RETURN</strong>: Number of blocks to wait before
                  voting on a proposal may begin.
                </li>
              </ul>
            </p>
          </Grid>

          {/* voting period */}
          <Grid item>
            <Typography
              id="votingPeriod"
              className={classes.subHeading}
              variant="h4"
              component="h4"
            >
              Voting Period
            </Typography>
            <p className={classes.textStyle}>
              {" "}
              The number of Ethereum blocks to wait before voting on a proposal
              may begin. This value is added to the current block number when a
              proposal is created. This can be changed through governance.
            </p>
            <p className={classes.textStyle}>
              <span className={classes.subTextStyle1}>
                function <span className={classes.subTextStyle2}></span>
                votingDelay{" "}
              </span>
              ( ) returns (uint)
              <ul style={{ paddingLeft: "20px" }}>
                <li className={classes.listItemLineHeight}>
                  <strong>RETURN</strong>: The duration of voting on a proposal,
                  in Ethereum blocks.
                </li>
              </ul>
            </p>
          </Grid>
          {/* propose */}
          <Grid item>
            <Typography
              id="propose"
              className={classes.subHeading}
              variant="h4"
              component="h4"
            >
              Propose
            </Typography>
            <p className={classes.textStyle}>
              {" "}
              Proposals will be voted on by delegated voters. If there is
              sufficient support before the voting period ends, the proposal
              shall be automatically enacted. Enacted proposals are queued and
              executed in the BitDAO Timelock contract.
              <p className={classes.textStyle}>
                The sender must hold more BIT than the current proposal
                threshold (proposalThreshold ( )) as of the immediately previous
                block. If the threshold is 100,000 COMP, the sender must have
                been delegated more than 1% of all BIT in order to create a
                proposal. The proposal can have up to 10 actions (based on
                proposalMaxOperations ( )).
              </p>
              <p className={classes.textStyle}>
                The proposer cannot create another proposal if they currently
                have a pending or active proposal. It is not possible to queue
                two identical actions in the same block (due to a restriction in
                the Timelock), therefore actions in a single proposal must be
                unique, and unique proposals that share an identical action must
                be queued in different blocks
              </p>
            </p>
            <p className={classes.textStyle}>
              <span className={classes.subTextStyle1}>
                function <span className={classes.subTextStyle2}></span>
                propose{" "}
              </span>
              (address [ ] memory targets, uint [ ] memory values, string [ ]
              memory signatures, bytes [ ] memory calldatas, string memory
              description) returns (uint)
              <ul style={{ paddingLeft: "20px" }}>
                <li className={classes.listItemLineHeight}>
                  <strong>targets</strong>: The ordered list of target addresses
                  for calls to be made during proposal execution. This array
                  must be the same length as all other array parameters in this
                  function.
                </li>
                <li className={classes.listItemLineHeight}>
                  <strong>values</strong>:The ordered list of values (i.e.
                  msg.value) to be passed to the calls made during proposal
                  execution. This array must be the same length as all other
                  array parameters in this function.
                </li>
                <li className={classes.listItemLineHeight}>
                  <strong>signatures</strong>: The ordered list of function
                  signatures to be passed during execution. This array must be
                  the same length as all other array parameters in this
                  function.
                </li>
                <li className={classes.listItemLineHeight}>
                  <strong>calldatas</strong>: The ordered list of data to be
                  passed to each individual function call during proposal
                  execution. This array must be the same length as all other
                  array parameters in this function.
                </li>
                <li className={classes.listItemLineHeight}>
                  <strong>description</strong>: A human readable description of
                  the proposal and the changes it will enact.
                </li>
                <li className={classes.listItemLineHeight}>
                  <strong>RETURN</strong>: The ID of the newly created proposal.
                </li>
              </ul>
            </p>
          </Grid>

          {/* queue */}
          <Grid item>
            <Typography
              id="queue"
              className={classes.subHeading}
              variant="h4"
              component="h4"
            >
              Queue
            </Typography>
            <p className={classes.textStyle}>
              {" "}
              After a proposal has succeeded, any address can call the queue
              method to move the proposal into the Timelock queue. A proposal
              can only be queued if it has succeeded.
            </p>
            <p className={classes.textStyle}>
              <span className={classes.subTextStyle1}>
                function <span className={classes.subTextStyle2}></span>
                queue{" "}
              </span>
              (uint proposalId)
              <ul style={{ paddingLeft: "20px" }}>
                <li className={classes.listItemLineHeight}>
                  <strong>proposalId</strong>: ID of a proposal that has
                  succeeded
                </li>
                <li className={classes.listItemLineHeight}>
                  <strong>RETURN</strong>:No return, reverts on error.
                </li>
              </ul>
            </p>
          </Grid>

          {/* execute */}
          <Grid item>
            <Typography
              id="execute"
              className={classes.subHeading}
              variant="h4"
              component="h4"
            >
              Execute
            </Typography>
            <p className={classes.textStyle}>
              {" "}
              After the Timelock delay period, any account may invoke the
              execute method to apply the changes from the proposal to the
              target contracts. This will invoke each of the actions described
              in the proposal. This function is payable so the Timelock contract
              can invoke payable functions that were selected in the proposal.
            </p>
            <p className={classes.textStyle}>
              <span className={classes.subTextStyle1}>
                function <span className={classes.subTextStyle2}></span>
                execute{" "}
              </span>
              (uint proposalId) payable
              <ul style={{ paddingLeft: "20px" }}>
                <li className={classes.listItemLineHeight}>
                  <strong>proposalId</strong>: ID of a proposal that has execute
                </li>
                <li className={classes.listItemLineHeight}>
                  <strong>RETURN</strong>:No return, reverts on error.
                </li>
              </ul>
            </p>
          </Grid>

          {/* cancel */}
          <Grid item>
            <Typography
              id="cancel"
              className={classes.subHeading}
              variant="h4"
              component="h4"
            >
              Cancel
            </Typography>
            <p className={classes.textStyle}>
              {" "}
              Cancel a proposal that has not yet been executed. The Guardian is
              the only one who may execute this unless the proposer does not
              maintain the delegates required to create a proposal. If the
              proposer does not have more delegates than the proposal threshold,
              anyone can cancel the proposal.
            </p>
            <p className={classes.textStyle}>
              <span className={classes.subTextStyle1}>
                function <span className={classes.subTextStyle2}></span>
                cancel{" "}
              </span>
              (uint proposalId)
              <ul style={{ paddingLeft: "20px" }}>
                <li className={classes.listItemLineHeight}>
                  <strong>proposalId</strong>: ID of a proposal to cancel. The
                  proposal cannot have already been executed.
                </li>
                <li className={classes.listItemLineHeight}>
                  <strong>RETURN</strong>:No return, reverts on error.
                </li>
              </ul>
            </p>
          </Grid>

          {/* get actions */}
          <Grid item>
            <Typography
              id="getActions"
              className={classes.subHeading}
              variant="h4"
              component="h4"
            >
              Get Actions
            </Typography>
            <p className={classes.textStyle}>
              {" "}
              Gets the actions of a selected proposal. Pass a proposal ID and
              get the targets, values, signatures and calldatas of that
              proposal.
            </p>
            <p className={classes.textStyle}>
              <span className={classes.subTextStyle1}>
                function <span className={classes.subTextStyle2}></span>
                getActions{" "}
              </span>
              (uint proposalId) returns (uint proposalId) public view returns
              (address [ ] memory targets, uint [ ] memory values, string [ ]
              memory signatures, bytes [ ] memory calldatas)
              <ul style={{ paddingLeft: "20px" }}>
                <li className={classes.listItemLineHeight}>
                  <strong>proposalId</strong>: ID of a proposal in which to get
                  its actions.
                </li>
                <li className={classes.listItemLineHeight}>
                  <strong>RETURN</strong>: Reverts if the proposal ID is
                  invalid. If successful, the following 4 references are
                  returned.
                </li>
              </ul>
              <ol style={{ paddingLeft: "20px" }}>
                <li className={classes.listItemLineHeight}>
                  Array of addresses of contracts the proposal calls.
                </li>
                <li className={classes.listItemLineHeight}>
                  Array of unsigned integers the proposal uses as values.
                </li>
                <li className={classes.listItemLineHeight}>
                  Array of strings of the proposal’s signatures.
                </li>
                <li className={classes.listItemLineHeight}>
                  Array of calldata bytes of the proposal.
                </li>
              </ol>
            </p>
          </Grid>

          {/* get receipt */}
          <Grid item>
            <Typography
              id="getReceipt"
              className={classes.subHeading}
              variant="h4"
              component="h4"
            >
              Get Actions
            </Typography>
            <p className={classes.textStyle}>
              {" "}
              Gets a proposal ballot receipt of the indicated voter.
            </p>
            <p className={classes.textStyle}>
              <span className={classes.subTextStyle1}>
                function <span className={classes.subTextStyle2}></span>
                getReceipt{" "}
              </span>
              (uint proposalId, address voter) returns (Receipt memory)
              <ul style={{ paddingLeft: "20px" }}>
                <li className={classes.listItemLineHeight}>
                  <strong>proposalId</strong>: ID of the proposal in which to
                  get a voter’s ballot receipt.
                </li>
                <li className={classes.listItemLineHeight}>
                  <strong>voter</strong>: Address of the account of a proposal
                  voter.
                </li>
                <li className={classes.listItemLineHeight}>
                  <strong>RETURN</strong>: Reverts on error. If successful,
                  returns a Receipt struct for the ballot of the voter address.
                </li>
              </ul>
            </p>
          </Grid>

          {/* state */}
          <Grid item>
            <Typography
              id="state"
              className={classes.subHeading}
              variant="h4"
              component="h4"
            >
              State
            </Typography>
            <p className={classes.textStyle}>
              {" "}
              Gets the proposal state for the specified proposal. The return
              value, ProposalState is an enumerated type defined in the Governor
              Bravo contract.
            </p>
            <p className={classes.textStyle}>
              <span className={classes.subTextStyle1}>
                function <span className={classes.subTextStyle2}></span>
                state{" "}
              </span>
              (uint proposalId) returns (ProposalState)
              <ul style={{ paddingLeft: "20px" }}>
                <li className={classes.listItemLineHeight}>
                  <strong>proposalId</strong>: ID of a proposal in which to get
                  its state.
                </li>

                <li className={classes.listItemLineHeight}>
                  <strong>RETURN</strong>: Enumerated type ProposalState. The
                  types are Pending, Active, Canceled, Defeated, Succeeded,
                  Queued, Expired, andExecuted.
                </li>
              </ul>
            </p>
          </Grid>

          {/* cast vote */}
          <Grid item>
            <Typography
              id="castVote"
              className={classes.subHeading}
              variant="h4"
              component="h4"
            >
              Cast Vote
            </Typography>
            <p className={classes.textStyle}>
              {" "}
              Cast a vote on a proposal. The account's voting weight is
              determined by the number of votes the account had delegated to it
              at the time the proposal state became active.
            </p>
            <p className={classes.textStyle}>
              <span className={classes.subTextStyle1}>
                function <span className={classes.subTextStyle2}></span>
                castVote{" "}
              </span>
              (uint proposalId, uint8 support)
              <ul style={{ paddingLeft: "20px" }}>
                <li className={classes.listItemLineHeight}>
                  <strong>proposalId</strong>: ID of a proposal in which to cast
                  a vote.
                </li>

                <li className={classes.listItemLineHeight}>
                  <strong>support</strong>: An integer of 0 for against, 1 for
                  in-favor, and 2 for abstain. • RETURN: No return, reverts on
                  error.
                </li>
              </ul>
            </p>
          </Grid>

          {/* cast votewith reason */}
          <Grid item>
            <Typography
              id="castVoteWithReason"
              className={classes.subHeading}
              variant="h4"
              component="h4"
            >
              Cast Vote With Reason
            </Typography>
            <p className={classes.textStyle}>
              {" "}
              Cast a vote on a proposal with a reason attached to the vote.
            </p>
            <p className={classes.textStyle}>
              <span className={classes.subTextStyle1}>
                function <span className={classes.subTextStyle2}></span>
                castVoteWithReason{" "}
              </span>
              (uint proposalId, uint8 support, string calldata reason)
              <ul style={{ paddingLeft: "20px" }}>
                <li className={classes.listItemLineHeight}>
                  <strong>proposalId</strong>: ID of a proposal in which to cast
                  a vote.
                </li>

                <li className={classes.listItemLineHeight}>
                  <strong>support</strong>: An integer of 0 for against, 1 for
                  in-favor, and 2 for abstain.
                </li>
                <li className={classes.listItemLineHeight}>
                  <strong>reason</strong>: A string containing the voter's
                  reason for their vote selection. • RETURN: No return, reverts
                  on error.
                </li>
              </ul>
            </p>
          </Grid>

          {/* cast vote by signature */}
          <Grid item>
            <Typography
              id="castVoteBySignature"
              className={classes.subHeading}
              variant="h4"
              component="h4"
            >
              Cast Vote By Signature
            </Typography>
            <p className={classes.textStyle}>
              {" "}
              Cast a vote on a proposal. The account's voting weight is
              determined by the number of votes the account had delegated at the
              time that proposal state became active. This method has the same
              purpose as Cast Vote but it instead enables offline signatures to
              participate in BitDAO governance voting. For more details on how
              to create an offline signature, review EIP-712.
            </p>
            <p className={classes.textStyle}>
              <span className={classes.subTextStyle1}>
                function <span className={classes.subTextStyle2}></span>
                castVoteBySig{" "}
              </span>
              (uint proposalId, uint8 support, uint8 v, bytes32 r, bytes32 s)
              <ul style={{ paddingLeft: "20px" }}>
                <li className={classes.listItemLineHeight}>
                  <strong>proposalId</strong>: ID of a proposal in which to cast
                  a vote.
                </li>

                <li className={classes.listItemLineHeight}>
                  <strong>support</strong>: An integer of 0 for against, 1 for
                  in-favor, and 2 for abstain.
                </li>
                <li className={classes.listItemLineHeight}>
                  <strong>v</strong>: The recovery byte of the signature.
                </li>
                <li className={classes.listItemLineHeight}>
                  <strong>r</strong>: Half of the ECDSA signature pair.
                </li>
                <li className={classes.listItemLineHeight}>
                  <strong>s</strong>: Half of the ECDSA signature pair.
                </li>
                <li className={classes.listItemLineHeight}>
                  <strong>RETURN</strong>: No return, reverts on error.
                </li>
              </ul>
            </p>
          </Grid>
          {/* timelock */}
          <Grid item>
            <Typography
              id="timelock"
              className={classes.subHeading}
              variant="h4"
              component="h4"
            >
              Timelock
            </Typography>
            <p className={classes.textStyle}>
              {" "}
              The Timelock contract can modify system parameters, logic, and
              contracts in a 'time-delayed, opt-out' upgrade pattern. The
              Timelock has a hard-coded minimum delay of 2 days, which is the
              least amount of notice possible for a governance action. Each
              proposed action will be published at a minimum of 2 days in the
              future from the time of announcement. Major upgrades, such as
              changing the risk system, may have a 14 day delay.
            </p>
          </Grid>
          {/* pause guardian */}
          <Grid item>
            <Typography
              id="pauseGuardian"
              className={classes.subHeading}
              variant="h4"
              component="h4"
            >
              Pause Guardian
            </Typography>
            <p className={classes.textStyle}> </p>
          </Grid>
        </Grid>

      </Grid>
    <Grid item>
        <p style={{textAlign:'right', paddingBottom:'30px'}}>© 2021 Uniswap</p>
    </Grid>
    </div>
  );
}

export default Governance;

import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';

export const sidebarOpt = [
  { id: 1, title: 'Threads', Icon: InsertCommentIcon },
  { id: 2, title: 'Mentions & Reactions', Icon: InboxIcon },
  { id: 3, title: 'Saved items', Icon: DraftsIcon },
  { id: 4, title: 'Channel Browser', Icon: BookmarkBorderIcon },
  { id: 5, title: 'People & user groups', Icon: PeopleAltIcon },
  { id: 6, title: 'Apps', Icon: AppsIcon },
  { id: 7, title: 'File Browser', Icon: FileCopyIcon },
  { id: 8, title: 'Show less', Icon: ExpandLessIcon },
  { id: 9, title: 'Channels', Icon: ExpandMoreIcon },
  {
    id: 10,
    title: 'Add Channel',
    Icon: AddIcon,
    addChannelOption: true,
  },
];

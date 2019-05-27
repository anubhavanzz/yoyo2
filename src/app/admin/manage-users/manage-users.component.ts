import { Component, OnInit, OnDestroy } from '@angular/core';
import { FirebaseService } from 'src/app/common/services/firebase.service';
import { User } from 'src/app/models/user.model';
import { MatTableColumns } from 'src/app/common/MatTableColumns';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit, OnDestroy {

  public allUsersArray: User[];
  public adminsArray: User[];
  public usersArray: User[];
  public subscriptions: Subscription[] = [];
  // ColumnDef, HeaderCellDef
  public matTableColumns: MatTableColumns[] = [
    new MatTableColumns('name', 'User Name'),
    new MatTableColumns('email', 'Email'),
    // new MatTableColumns('isUser', 'Is User?'),
    new MatTableColumns('provider', 'Provider'),
    new MatTableColumns('points', 'Credit Points'),
  ];

  public displayedColumns: string[] = ['name', 'email', 'provider', 'points'];


  constructor(private fbService: FirebaseService) { }

  public ngOnInit(): void {
    this.subscriptions.push(
      this.fbService.getAllUsersFromFirebase().subscribe(list => {
        this.allUsersArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
        this.usersArray = this.allUsersArray.filter(item => item.isUser === true);
        this.adminsArray = this.allUsersArray.filter(item => item.isUser === false);
      })
    );
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }
}

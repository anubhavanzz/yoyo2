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
export class ManageUsersComponent implements OnInit ,OnDestroy {

  usersArray: User[];
  subscriptions: Subscription[] = [];
  // ColumnDef, HeaderCellDef
  matTableColumns: MatTableColumns[] = [
    new MatTableColumns('name', 'User Name'),
    new MatTableColumns('email', 'Email'),
    new MatTableColumns('isUser', 'Is User?'),
    new MatTableColumns('provider', 'Provider'),
    new MatTableColumns('points', 'Credit Points'),
  ];

  displayedColumns: string[] = ['name', 'email', 'isUser', 'provider', 'points'];


  constructor(private fbService: FirebaseService) { }

  ngOnInit() {

    this.subscriptions.push(
      this.fbService.getAllUsersFromFirebase().subscribe(list => {
        this.usersArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      })
    );
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserGiftCardMapping } from 'src/app/models/user-giftcard-mapping.model';
import { FirebaseService } from 'src/app/common/services/firebase.service';
import { MatTableColumns } from 'src/app/common/MatTableColumns';
import { AuthService } from 'src/app/common/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css']
})
export class UserOrdersComponent implements OnInit, OnDestroy {

  // ColumnDef, HeaderCellDef
  matTableColumns: MatTableColumns[] = [
    new MatTableColumns('receiver', 'Sent to'),
    new MatTableColumns('giftCardName', 'Gift Card Name'),
    new MatTableColumns('giftCardId', 'GiftCard Number'),
    new MatTableColumns('points', 'Points'),
    new MatTableColumns('createdDate', 'Created Date'),
  ];

  public displayedColumns: string[] = ['receiver', 'giftCardName', 'giftCardId', 'points', 'createdDate'];

  public allUsersGiftOrders: UserGiftCardMapping[];
  public userGiftOrders: UserGiftCardMapping[];
  public subscriptions: Subscription[] = [];


  constructor(private fbService: FirebaseService,
    private authService: AuthService) { }

  ngOnInit() {
    this.subscriptions.push(
      this.fbService.getAllUserGiftCardFromFirebase().subscribe(list => {
        this.allUsersGiftOrders = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
        this.userGiftOrders = this.allUsersGiftOrders.filter(order => order.sender === this.authService.user.email);
        console.log('--------from userorders comp', this.userGiftOrders);
      })
    );
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }

}

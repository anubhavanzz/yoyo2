import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserGiftCardMapping } from 'src/app/models/user-giftcard-mapping.model';
import { FirebaseService } from 'src/app/common/services/firebase.service';
import { AuthService } from 'src/app/common/services/auth.service';
import { MatTableColumns } from 'src/app/common/MatTableColumns';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit, OnDestroy {

  // ColumnDef, HeaderCellDef
  public matTableColumns: MatTableColumns[] = [
    new MatTableColumns('receiver', 'Sent to'),
    new MatTableColumns('giftCardName', 'Gift Card Name'),
    new MatTableColumns('giftCardId', 'GiftCard Number'),
    new MatTableColumns('points', 'Points'),
    new MatTableColumns('createdDate', 'Created Date'),
  ];

  private subscriptions: Subscription[] = [];

  public displayedColumns: string[] = ['receiver', 'giftCardName', 'giftCardId', 'points', 'createdDate'];

  public allUsersGiftOrders: UserGiftCardMapping[];



  constructor(private fbService: FirebaseService,
    private authService: AuthService) { }

  public ngOnInit(): void {
    this.subscriptions.push(
      this.fbService.getAllUserGiftCardFromFirebase().subscribe(list => {
        this.allUsersGiftOrders = list.map(item => {
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

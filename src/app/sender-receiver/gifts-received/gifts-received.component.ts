import { Component, OnInit } from '@angular/core';
import { MatTableColumns } from 'src/app/common/MatTableColumns';
import { UserGiftCardMapping } from 'src/app/models/user-giftcard-mapping.model';
import { FirebaseService } from 'src/app/common/services/firebase.service';
import { AuthService } from 'src/app/common/services/auth.service';

@Component({
  selector: 'app-gifts-received',
  templateUrl: './gifts-received.component.html',
  styleUrls: ['./gifts-received.component.css']
})
export class GiftsReceivedComponent implements OnInit {

  // ColumnDef, HeaderCellDef
  matTableColumns: MatTableColumns[] = [
    new MatTableColumns('receiver', 'Sent to'),
    new MatTableColumns('giftCardName', 'Gift Card Name'),
    new MatTableColumns('giftCardId', 'GiftCard Number'),
    new MatTableColumns('points', 'Points'),
    new MatTableColumns('createdDate', 'Created Date'),
    new MatTableColumns('actions', 'Actions'),
  ];

  displayedColumns: string[] = ['receiver', 'giftCardName', 'giftCardId', 'points', 'createdDate', 'actions'];

  allUsersGiftOrders: UserGiftCardMapping[];
  userReceivedGiftOrders: UserGiftCardMapping[];


  constructor(private fbService: FirebaseService,
    private authService: AuthService) { }

  ngOnInit() {
    this.fbService.getAllUserGiftCardFromFirebase().subscribe(list => {
      this.allUsersGiftOrders = list.map(item => {
        return {
          $key: item.key,
          ...item.payload.val()
        };
      });
      this.userReceivedGiftOrders = this.allUsersGiftOrders.filter(order => order.receiver === this.authService.user.email);
      console.log('--------from giftReceived comp', this.userReceivedGiftOrders);
    });

  }

}
